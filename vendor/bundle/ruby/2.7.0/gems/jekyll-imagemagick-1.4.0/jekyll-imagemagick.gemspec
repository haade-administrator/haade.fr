require 'date'
require_relative 'lib/jekyll-imagemagick/version'

Gem::Specification.new do |spec|
  spec.name          = 'jekyll-imagemagick'
  spec.version       = Jekyll::Imagemagick::VERSION
  spec.platform      = Gem::Platform::RUBY
  spec.date          = Time.now.strftime('%Y-%m-%d')
  spec.authors       = ['Emilio Del Tessandoro']
  spec.email         = ['emilio.deltessa@gmail.com']
  spec.homepage      = 'https://gitlab.com/emmmile/jekyll-imagemagick'
  spec.license       = 'MIT'

  spec.summary       = 'Image generator for Jekyll 3 websites.'
  spec.description   = 'Image generator for Jekyll 3 websites that automatically ' \
                       'convert images from one format to another.'

  spec.files         = Dir[
                         'CODE_OF_CONDUCT.md',
                         'README.md',
                         'LICENSE',
                         'Rakefile',
                         '*.gemspec',
                         'Gemfile',
                         'lib/**/*'
                       ]

  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^spec/})
  spec.require_paths = ['lib']

  spec.add_dependency 'jekyll', '>= 3.4'
  spec.add_development_dependency 'bundler', '~> 1.15'
  spec.add_development_dependency 'minitest', '~> 5.11'
  spec.add_development_dependency 'rake', '~> 12.3'
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'rubocop', '~> 0.59.1'
  spec.add_development_dependency 'test-unit', '~> 3.2'
end
