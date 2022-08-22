require 'jekyll/document'
require 'fileutils'

module JekyllImagemagick
  # A static file to hold the generated webp image after generation
  # so that Jekyll will copy it into the site output directory
  class ImageFile < Jekyll::StaticFile
    def write(_dest)
      true # Recover from strange exception when starting server without --auto
    end
  end

  # Go through a set of directories and convert files
  class ImageGenerator < Jekyll::Generator
    # This generator is safe from arbitrary code execution.
    safe true

    # This generator should be passive with regard to its execution
    priority :lowest

    # Main function, called by Jekyll-core. Do the transformations...
    def generate(site)
      # Retrieve and merge the configuration from the site yml file
      @config = DEFAULTS.merge(site.config['imagemagick'] || {})

      # If disabled then simply quit
      unless @config['enabled']
        Jekyll.logger.info(LOG_PREFIX, 'Disabled in site.config')
        return
      end

      # If the site destination directory has not yet been created then create it now.
      # Otherwise, we cannot write our file there.
      unless File.directory? site.dest
        Dir.mkdir(site.dest)
      end

      files = get_files_to_transform(site, @config['input_directories'], @config['input_formats'])
      tuples = compute_transformations(site, files, @config['output_formats'], @config['widths'])
      generate_output_paths(site, tuples)
      generated_files = generate_files(site, tuples, @config['output_formats'])

      Jekyll.logger.info(LOG_PREFIX, "Generated #{generated_files} file(s)")
    end

    private

    # Return all the files to convert
    def get_files_to_transform(site, directories, input_formats)
      files = []

      directories.each do |directory|
        directory_full_path = File.join(site.source, directory)
        Jekyll.logger.info(LOG_PREFIX, "Searching files in #{directory_full_path}")

        Dir[directory_full_path + '**/*.*'].each do |file_full_path|
          # If the file_full_path is not one of the supported formats, exit early
          extension = File.extname(file_full_path).downcase
          next unless input_formats.include? extension

          files.push(file_full_path)
        end
      end

      return files
    end

    # Returns a list (input, output, edge)
    def compute_transformations(site, input_files_full_path, formats, edges)
      output = []

      if formats.length.zero?
        Jekyll.logger.warn(LOG_PREFIX, 'No output formats found!')
        return output
      end

      input_files_full_path.each do |input_file_full_path|
        formats.each do |format_extension, _flags|
          edges.each do |edge|
            extension = File.extname(input_file_full_path)
            prefix = File.dirname(input_file_full_path.sub(site.source, ''))
            suffix = ''
            unless edge.zero?
              suffix = '-' + edge.to_s
            end
            filename = File.basename(input_file_full_path, extension) +
                       suffix + '.' + format_extension.to_s
            output_file_full_path = File.join(site.dest + prefix, filename)
            output.push([input_file_full_path, output_file_full_path, edge])
          end
        end
      end

      return output
    end

    def generate_output_paths(_site, tuples)
      tuples.each do |tuple|
        _input, output, _edge = tuple
        directory = File.dirname(output)
        FileUtils.mkdir_p(directory)
      end
    end

    def generate_files(site, tuples, formats)
      generated_files = 0

      tuples.each do |tuple|
        input_file_full_path, output_file_full_path, edge = tuple
        # Check if the file already has a webp alternative?
        # If we're force rebuilding all webp files then ignore the check
        # also check the modified time on the files to ensure that the webp file
        # is newer than the source file, if not then regenerate
        if !File.file?(output_file_full_path) ||
           (File.mtime(output_file_full_path) <= File.mtime(input_file_full_path))
          # Generate the file
          extension = File.extname(output_file_full_path).sub('.', '')
          ImageConvert.run(input_file_full_path,
                           output_file_full_path,
                           formats[extension],
                           edge,
                           @config['resize_flags'])
          generated_files += 1
        end

        next unless File.file?(output_file_full_path)

        # Keep the webp file from being cleaned by Jekyll
        prefix = File.dirname(input_file_full_path.sub(site.source, ''))
        file_path = site.dest + prefix + '/' + File.basename(output_file_full_path)
        Jekyll.logger.info(LOG_PREFIX, "Adding static file #{file_path}")
        site.static_files << ImageFile.new(site,
                                           site.dest,
                                           prefix,
                                           File.basename(output_file_full_path))
      end

      return generated_files
    end
  end
end
