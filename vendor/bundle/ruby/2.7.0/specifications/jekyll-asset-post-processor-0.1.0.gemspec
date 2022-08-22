# -*- encoding: utf-8 -*-
# stub: jekyll-asset-post-processor 0.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-asset-post-processor".freeze
  s.version = "0.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Darcy Supply Ltd.".freeze, "Harry Stanton".freeze]
  s.date = "2022-05-05"
  s.email = "harry@darcysupply.com".freeze
  s.homepage = "https://github.com/darcysupply/jekyll-asset-post-processor".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Process then suffix your Jekyll assets with cache busting version hashes".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.5", "< 5.0"])
    s.add_runtime_dependency(%q<jekyll-watch>.freeze, ["~> 2.0"])
    s.add_runtime_dependency(%q<liquid>.freeze, ["~> 4.0"])
    s.add_runtime_dependency(%q<sassc>.freeze, ["~> 2.0"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.5", "< 5.0"])
    s.add_dependency(%q<jekyll-watch>.freeze, ["~> 2.0"])
    s.add_dependency(%q<liquid>.freeze, ["~> 4.0"])
    s.add_dependency(%q<sassc>.freeze, ["~> 2.0"])
  end
end
