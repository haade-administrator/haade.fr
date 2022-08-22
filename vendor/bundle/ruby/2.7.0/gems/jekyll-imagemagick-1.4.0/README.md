[![Gem Version](https://img.shields.io/gem/v/jekyll-imagemagick.svg)](https://rubygems.org/gems/jekyll-imagemagick)
[![Gem](https://img.shields.io/gem/dt/jekyll-imagemagick.svg)](https://rubygems.org/gems/jekyll-imagemagick)
[![build](https://gitlab.com/emmmile/jekyll-imagemagick/badges/master/build.svg)](https://gitlab.com/emmmile/jekyll-imagemagick/pipelines)
<!-- [![Code Climate](https://codeclimate.com/github/sverrirs/jekyll-imagemagick/badges/gpa.svg)](https://codeclimate.com/github/sverrirs/jekyll-imagemagick) -->
<!-- [![security](https://hakiri.io/github/sverrirs/jekyll-imagemagick/master.svg)](https://hakiri.io/github/sverrirs/jekyll-imagemagick/master) -->

# Image Generator for Jekyll

`jekyll-imagemagick` is a plugin for Jekyll that can automatically convert images from one format to another.

Typical usecase is having a directory full of original files or RAW images (say in PNG or other lossless formats) and convert them automatically to responsive JPG/WEBP format. I personally use this plugin in combination with Jekyll to generate images for my website [emilio.photography](https://emilio.photography/).

## Installation

You need to install [imagemagick](https://www.imagemagick.org/script/index.php) command line as a prerequisite for the generator to work.

For manual installation you can just:

```bash
gem install jekyll-imagemagick
```

Alternatively you should add `jekyll-imagemagick` to your `Gemfile` and to Jekyll's `_config.yml` (see below for the configuration).

Then install it and run Jekyll:

```bash
bundle install --path vendor/bundle
bundle exec jekyll serve
```

And you should see the generator running during site generation.

## Example configuration

The plugin can be configured in the site's `_config.yml` file, in a `imagemagick` block:

```yml
imagemagick:
  enabled: true
  widths:
    - 1024
    - 512
    - 0
  input_directories:
    - assets/img/blog
    - assets/img/pages
  input_formats:
    - ".png"
    - ".tiff"
  output_formats:
    jpg: "-quality 93% -define jpeg:dct-method=float -strip -interlace Plane"
    webp: "-quality 100%"
```

This example configuration will:

- Recursively search for input images with format PNG/TIFF in the directories `assets/img/blog` and `assets/img/pages`.
- For each input image it generates a JPG and WEBP output.
- Output images will be generated with resolutions 512x, 1024x and "untouched" (meaning it just keep the resolution of the original input image).

Notice that you can specify some fancy options for the `imagemagick` command line, like `-define jpeg:dct-method=float -strip -interlace Plane`
that is supposed to produce more efficiently progressive-compressed images.

### How to use WEBP in HTML

Not all browsers are compatible with WEBP. Using the `<picture>` element and specifying all image formats available is the best option. This way the browser will decide which format to use based on its own capabilities.

``` html
<picture>
  <source srcset="/path/to/image.webp" type="image/webp">
  <img src="/path/to/image.jpg" alt="">
</picture>
```

## Development

Feel free to submit pull requests for adding new features, I'll be more than happy to review them.
Please run the tests and the codestyle checks before doing that:

```bash
bundle install --path vendor/bundle
bundle exec rake test
bundle exec rake codestyle
```

These tests are also executed automatically by Gitlab CI/CD (configured with [`.gitlab-ci.yml`](./.gitlab-ci.yml)).

## Known issues

So far so good.

## Authors

* **Emilio Del Tessandoro** - Generalized to any image format and passing all options to imagemagick
* **Sverrir Sigmundarson** - Initial work on [jekyll-webp](https://github.com/sverrirs/jekyll-webp)
