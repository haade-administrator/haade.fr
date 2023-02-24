require 'json'
require 'yaml'
require 'net/http'

module Jekyll
  class ViewsGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      countapi_namespace = site.config.dig('countapi', 'namespace')
      return unless countapi_namespace

      # Fetch views for each post and store in a hash by date
      views_by_date = {}
      site.posts.docs.each do |post|
        url_encoded = URI.encode_www_form_component(post.url.gsub('/', '-').slice(1, 64))
        countapi_url = "https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}"
        begin
          uri = URI(countapi_url)
          request = Net::HTTP::Get.new(uri)
          response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') { |http| http.request(request) }
          views = JSON.parse(response.body)['value'].to_i rescue 0
          post_views = post.data['views'] = views
          date = post.data['date']
          if date
            views_by_date[date] ||= 0
            views_by_date[date] += views
          end
        rescue StandardError => e
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
          { 'guid' => guid, 'title' => title, 'published' => published, 'image' => image, 'views' => views }
        end
        locales_views_data[locale].sort_by! { |data| data['guid'] }
        puts "Updated views data for #{locale} with #{locales_views_data[locale].size} posts"
      end

      # Save views by date to a separate file
      views_data_path = File.join(site.source, '_data', 'views_by_date.yml')
      views_data_yaml = views_by_date.to_yaml
      File.write(views_data_path, views_data_yaml)
      puts "Saved views data by date to #{views_data_path}"

      # Save views data for each locale to a separate file
      post_views_data_path = File.join(site.source, '_data', 'locales', 'postcountviews.yml')
      post_views_data_yaml = locales_views_data.to_yaml.sub(/^---\n/, '').gsub(/\n/m,"\n  ")
      post_views_data_yaml = post_views_data_yaml.gsub(/^(\s*)(\w{2}_\w{2}:)/, "\\2")
      post_views_data_yaml = post_views_data_yaml.gsub(/^(\s*)(\w{2}(_\w{2})?:)/, "\n\\2")
      post_views_data_yaml.strip!
      File.write(post_views_data_path, post_views_data_yaml)
      puts "Saved views data for each locale to #{post_views_data_path}"
    end
  end
end