module Jekyll
  module RegexFilter
    def replace_regex(input, reg_str, repl_str)
      re = Regexp.new reg_str

      # This will be returned
      result = input.gsub re, repl_str
      puts "Filtered: #{input} => #{result}"
      result
    end
  end

  Liquid::Template.register_filter(Jekyll::RegexFilter)
end
