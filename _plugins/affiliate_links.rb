# https://brettterpstra.com/2019/03/05/amazon-affiliates-and-automated-contextual-snippets-in-jekyll/
module MyLiquidFilters
    # Checks if the post contains amazon affiliate links
    def has_amazon(input)
      input =~ /(https:\/\/amzn.to)/i ? true : false
    end
    # # Checks if the post contains aliexpress affiliate links
    def has_aliexpress(input)
      input =~ /(https:\/\/s.click.aliexpress.com)/i ? true : false
    end
    # # Checks if the post contains domadoo affiliate links
    def has_domadoo(input)
      input =~ /(\?domid=39)/i ? true : false
    end
  
    Liquid::Template.register_filter self
  end