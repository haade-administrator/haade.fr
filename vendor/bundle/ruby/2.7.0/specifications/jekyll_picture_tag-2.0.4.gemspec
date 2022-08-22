# -*- encoding: utf-8 -*-
# stub: jekyll_picture_tag 2.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll_picture_tag".freeze
  s.version = "2.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "documentation_uri" => "https://rbuchberger.github.io/jekyll_picture_tag/" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Robert Wierzbowski".freeze, "Brendan Tobolaski".freeze, "Robert Buchberger".freeze]
  s.date = "2022-08-16"
  s.description = "    Jekyll Picture Tag adds responsive images to your Jekyll static site. It\n    automatically creates resized source images, is fully configurable, and\n    covers all use cases, including art direction and resolution switching, with\n    a little YAML configuration and a simple template tag.\n".freeze
  s.email = ["robert@buchberger.cc".freeze]
  s.homepage = "https://github.com/rbuchberger/jekyll_picture_tag".freeze
  s.licenses = ["BSD-3-Clause".freeze]
  s.required_ruby_version = Gem::Requirement.new([">= 2.6".freeze, "< 4.0".freeze])
  s.requirements = ["libvips".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Easy responsive images for Jekyll.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.6"])
    s.add_runtime_dependency(%q<jekyll>.freeze, ["~> 4.0"])
    s.add_runtime_dependency(%q<mime-types>.freeze, ["~> 3.0"])
    s.add_runtime_dependency(%q<objective_elements>.freeze, ["~> 1.1"])
    s.add_runtime_dependency(%q<rainbow>.freeze, ["~> 3.0"])
    s.add_runtime_dependency(%q<ruby-vips>.freeze, ["~> 2.0.17"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_development_dependency(%q<minitest>.freeze, ["~> 5.14"])
    s.add_development_dependency(%q<minitest-rg>.freeze, [">= 0"])
    s.add_development_dependency(%q<mocha>.freeze, ["~> 1.9"])
    s.add_development_dependency(%q<nokogiri>.freeze, ["~> 1.1"])
    s.add_development_dependency(%q<pry>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 12.3"])
    s.add_development_dependency(%q<rubocop>.freeze, ["~> 1.7.0"])
    s.add_development_dependency(%q<rubocop-minitest>.freeze, ["~> 0.10.0"])
    s.add_development_dependency(%q<rubocop-performance>.freeze, ["~> 1.9.0"])
    s.add_development_dependency(%q<rubocop-rake>.freeze, ["~> 0.5.0"])
    s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.20.0"])
    s.add_development_dependency(%q<solargraph>.freeze, [">= 0"])
  else
    s.add_dependency(%q<addressable>.freeze, ["~> 2.6"])
    s.add_dependency(%q<jekyll>.freeze, ["~> 4.0"])
    s.add_dependency(%q<mime-types>.freeze, ["~> 3.0"])
    s.add_dependency(%q<objective_elements>.freeze, ["~> 1.1"])
    s.add_dependency(%q<rainbow>.freeze, ["~> 3.0"])
    s.add_dependency(%q<ruby-vips>.freeze, ["~> 2.0.17"])
    s.add_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.14"])
    s.add_dependency(%q<minitest-rg>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, ["~> 1.9"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.1"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.3"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 1.7.0"])
    s.add_dependency(%q<rubocop-minitest>.freeze, ["~> 0.10.0"])
    s.add_dependency(%q<rubocop-performance>.freeze, ["~> 1.9.0"])
    s.add_dependency(%q<rubocop-rake>.freeze, ["~> 0.5.0"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.20.0"])
    s.add_dependency(%q<solargraph>.freeze, [">= 0"])
  end
end
