# -*- encoding: utf-8 -*-
# stub: jekyll-imagemagick 1.4.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-imagemagick".freeze
  s.version = "1.4.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Emilio Del Tessandoro".freeze]
  s.date = "2018-09-15"
  s.description = "Image generator for Jekyll 3 websites that automatically convert images from one format to another.".freeze
  s.email = ["emilio.deltessa@gmail.com".freeze]
  s.homepage = "https://gitlab.com/emmmile/jekyll-imagemagick".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Image generator for Jekyll 3 websites.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.4"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.15"])
    s.add_development_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 12.3"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.59.1"])
    s.add_development_dependency(%q<test-unit>.freeze, ["~> 3.2"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.4"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.15"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.59.1"])
    s.add_dependency(%q<test-unit>.freeze, ["~> 3.2"])
  end
end
