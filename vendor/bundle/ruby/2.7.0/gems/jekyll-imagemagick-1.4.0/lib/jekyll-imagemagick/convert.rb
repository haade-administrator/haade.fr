require 'open3'

module JekyllImagemagick
  # Class used to convert a single image to another format using imagemagick
  class ImageConvert
    # Executes a command and wait for the output
    def self.run_cmd(cmd)
      exit_code = 0
      error = ''
      output = ''
      Open3.popen3(cmd) do |stdin, stdout, stderr, wait_thr|
        stdin.close # we don't pass any input to the process
        output = stdout.gets
        error = stderr.gets
        exit_code = wait_thr.value
      end

      if exit_code != 0
        Jekyll.logger.error(LOG_PREFIX, "Command returned #{exit_code} with error #{error}")
      end

      # Return any captured return value
      return [output, error]
    end

    def self.run(input_file, output_file, flags, long_edge, resize_flags)
      Jekyll.logger.info(LOG_PREFIX, "Generating image \"#{output_file}\"")

      cmd = "convert \"#{input_file}\" #{flags} "
      if long_edge != 0
        cmd += "-resize \"#{long_edge}>\" #{resize_flags} "
      end
      cmd += "\"#{output_file}\""
      Jekyll.logger.debug(LOG_PREFIX, "Running command \"#{cmd}\"")
      run_cmd(cmd)
    end
  end
end
