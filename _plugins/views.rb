require 'json'
require 'open-uri'

module Jekyll
  class ViewsGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      countapi_namespace = site.config.dig('countapi', 'namespace')
      return unless countapi_namespace

      views_data = {}
      site.posts.docs.each do |post|
        url_encoded = URI::DEFAULT_PARSER.escape(post.url.gsub('/', '-').slice(1, 64))
        countapi_url = "https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}"
        puts "CountAPI URL: #{countapi_url}"
        begin
          views = JSON.parse(URI.open(countapi_url).read)['value']
          post.data['views'] = views.to_i || 0
          puts "Views: #{views}"
          views_data[post.id] = views.to_i
        rescue OpenURI::HTTPError, JSON::ParserError => e
          next
        end
      end

      # Write views data to file
      views_file = File.join(site.config['source'], '_data', 'views.json')
      File.write(views_file, JSON.generate(views_data))
    end
  end
end

