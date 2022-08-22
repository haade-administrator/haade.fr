module JekyllImagemagick
  LOG_PREFIX = 'Imagemagick:'.freeze

  # The default configuration for the Imagemagick generator
  # The values here represent the defaults if nothing is set
  DEFAULTS = {
    'enabled'           => false,

    # List of directories containing images to optimize, Nested directories will not be checked
    'input_directories' => [],

    # List of resolutions to generate, 0 means full size otherwise is the long edge
    'widths'            => [0],

    'input_formats'     => ['.png', '.tiff'],

    'output_formats'    => [],

    # List of files or directories to exclude
    'exclude'           => []
  }.freeze
end
