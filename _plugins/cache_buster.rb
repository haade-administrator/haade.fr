module Jekyll
  module CacheBuster
    require 'digest/md5'
    def cache_buster(file_name)
      [file_name, '?v=', Digest::MD5.hexdigest(File.read(File.join('./', file_name)))].join
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBuster)
