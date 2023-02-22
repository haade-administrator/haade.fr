# créé deux fichiers un pour chaque langue

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
      posts_by_locale = site.posts.docs.group_by { |post| post.data['locale'] || site.config['default_locale'] }
      posts_by_locale.each do |locale, posts|
        views_data = posts.map do |post|
          guid = post.data['guid']
          title = post.data['title']
          published = post.data['published']
          image = post.data['image']
          views = post.data['views'] || 0
          { 'guid' => guid, 'title' => title, 'published' => published, 'image' => image, 'views' => views }
        end
        views_data.sort_by! { |data| data['guid'] }
        data_path = File.join(site.source, '_data', 'locales', "views_#{locale[0,2]}.yml")
        File.write(data_path, views_data.to_yaml.gsub(/^---\n/, ''))
        puts "Updated views data for #{locale} with #{views_data.size} posts"
      end
    end
  end
end

