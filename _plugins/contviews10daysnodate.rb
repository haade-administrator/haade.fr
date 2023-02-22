=begin require 'json'
require 'yaml'
require 'net/http'

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
          uri = URI.parse(countapi_url)
          response = Net::HTTP.get_response(uri)
          views = JSON.parse(response.body)['value']
          post.data['views'] = views.to_i || 0
          puts "Views: #{views}"
        rescue StandardError => e
          next
        end
      end =end


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
      end

      # Generate views data for each locale
      locales_views_data = {}

      site.posts.docs.group_by { |post| post.data['locale'] || site.config['default_locale'] }.each do |locale, posts|
        locales_views_data[locale] = posts.map do |post|
          guid = post.data['guid']
          title = post.data['title']
          published = post.data['published']
          image = post.data['image']
          views = post.data['views'] || 0
          last_10_days_views = post.data['last_10_days_views'] || [views]
          last_10_days_views.push(views)
          last_10_days_views.shift while last_10_days_views.size > 10
          views10days = last_10_days_views.last - last_10_days_views.first
          post.data['last_10_days_views'] = last_10_days_views

          last_30_days_views = post.data['last_30_days_views'] || [views]
          last_30_days_views.push(views)
          last_30_days_views.shift while last_30_days_views.size > 30
          views30days = last_30_days_views.last - last_30_days_views.first
          post.data['last_30_days_views'] = last_30_days_views
          
          { 'guid' => guid, 'title' => title, 'published' => published, 'image' => image, 'views' => views, 'views10days' => views10days, 'views30days' => views30days }
        end
        locales_views_data[locale].sort_by! { |data| data['guid'] }
        puts "Updated views data for #{locale} with #{locales_views_data[locale].size} posts"
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
