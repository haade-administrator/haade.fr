require 'json'
require 'open-uri'

module Jekyll
  class ViewsGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      countapi_namespace = site.config.dig('countapi', 'namespace')

      return unless countapi_namespace

      error_file = File.new("_errors.log", "w")

      site.posts.docs.each do |post|
        url_encoded = post.url.gsub('/', '-').slice(1, 64)
        countapi_url = URI::DEFAULT_PARSER.escape("https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}")

        begin
          views = JSON.parse(URI.open(countapi_url).read)['value']
          post.data['views'] = views.to_i
        rescue OpenURI::HTTPError, JSON::ParserError => e
          error_file.puts("#{post.url}: #{e.message}")
          next
        end
      end

      error_file.close

      site.posts.docs.sort_by! { |post| -post.data['views'].to_i }
    end
  end
end