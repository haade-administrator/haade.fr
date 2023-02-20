require 'json'
require 'open-uri'

module Jekyll
  class ViewsGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      countapi_namespace = site.config.dig('countapi', 'namespace')

      return unless countapi_namespace

      site.posts.docs.each do |post|
        url_encoded = File.join(File.dirname(post.url), File.basename(post.url, ".*")).gsub('/', '-').slice(1, 64) + ".md"
        countapi_url = URI::DEFAULT_PARSER.escape("https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}")

        begin
          views = JSON.parse(URI.open(countapi_url).read)['value']
        rescue OpenURI::HTTPError, JSON::ParserError
          next
        end

        post.data['views'] = views.to_i
      end

      site.posts.docs.sort_by! { |post| -post.data['views'].to_i }
    end
  end
end


