require 'json'
require 'open-uri'
require 'yaml'

module Jekyll
  class ViewsGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      countapi_namespace = site.config.dig('countapi', 'namespace')
      return unless countapi_namespace

      # Fetch views for each post
      site.posts.docs.each do |post|
        url_encoded = URI.encode_www_form_component(post.url.gsub('/', '-').slice(1, 64))
        countapi_url = "https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}"
        puts "CountAPI URL: #{countapi_url}"
        begin
          views = JSON.parse(URI.open(countapi_url).read)['value']
          post.data['views'] = views.to_i || 0
          puts "Views: #{views}"
        rescue OpenURI::HTTPError, JSON::ParserError => e
          next
        end

        # Fetch views for the last 10 days
        last_10_days_views = []
        10.times do |i|
          date = (Date.today - i).strftime('%Y-%m-%d')
          countapi_url = "https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}/#{date}"
          puts "CountAPI URL for #{date}: #{countapi_url}"
          begin
            views = JSON.parse(URI.open(countapi_url).read)['value']
            last_10_days_views.unshift(views.to_i || 0)
            puts "Views for #{date}: #{views}"
          rescue OpenURI::HTTPError, JSON::ParserError => e
            last_10_days_views.unshift(0)
            next
          end
        end

        # Compute the difference in views between today and 10 days ago
        views_difference = last_10_days_views[0] - last_10_days_views[9]
        post.data['views_difference'] = views_difference
        puts "Views difference: #{views_difference}"
      end

      # Generate views data for each locale
      locales_views_data = {}
      site.posts.docs.group_by { |post| post.data['locale'] || site.config['default_locale'] }.each do |locale, posts|
        locales_views_data[locale] = {}
        locales_views_data[locale]['date'] = Date.today.strftime('%Y-%m-%d')
        locales_views_data[locale]['posts'] = posts.map do |post|
          guid = post.data['guid']
          title = post.data['title']
          published = post.data['published']
          image = post.data['image']
          views = post.data['views'] || 0
          views_difference = post.data['views_difference'] || 0
          { 'guid' => guid, 'title' => title, 'published' => published, 'image' => image, 'views' => views, 'views_difference' => views_difference }
        end
        locales_views_data[locale]['posts'].sort_by! { |data| data['guid'] }
        puts "Updated views data for #{locale} with #{locales_views_data[locale]['posts'].size} posts"
      end

data_path = File.join(site.source, '_data', 'locales', 'postcountviews.yml')
yaml_data = locales_views_data.to_yaml.sub(/^---\n/, '').gsub(/\n/m,"\n  ") # supprime la première ligne et ajoute une indentation de 2
yaml_data = yaml_data.gsub(/^(\s*)(\w{2}_\w{2}:)/, "\\2")  # Supprime l'indentation pour fr_FR
yaml_data = yaml_data.gsub(/^(\s*)(\w{2}(_\w{2})?:)/, "\n\\2")  # Ajoute une ligne vide pour en_GB
yaml_data.strip!  # Supprime les espaces en début et fin de chaîne
File.write(data_path, yaml_data)
puts "Saved views data to #{data_path}"
    end    
  end
end
