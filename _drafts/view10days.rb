# recalcule à la volée sur les 10 derniers jours sans affichage de ce que fait le script
# Dans le code que j'ai proposé, la liste views_last_10_days est initialisée avec 10 zéros, qui représentent le nombre de vues pour les 10 derniers jours. Cette liste est ensuite remplie avec les données réelles de vues pour chaque post à l'aide de la fonction fetch_views_last_10_days.
# La liste views_last_10_days n'est pas stockée directement dans le fichier YAML, car cela prendrait plus d'espace et rendrait le fichier plus difficile à lire. Au lieu de cela, seule la date de la dernière mise à jour des données est stockée dans le fichier YAML, et la liste views_last_10_days est recalculée à chaque fois que le générateur Jekyll est exécuté. Cela permet de garantir que les données sont à jour et évite d'alourdir inutilement le fichier YAML.
require 'json'
require 'open-uri'
require 'yaml'

module Jekyll
  class ViewsGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      countapi_namespace = site.config.dig('countapi', 'namespace')
      return unless countapi_namespace

      # Fetch views for each post
      site.posts.docs.each do |post|
        url_encoded = URI.encode_www_form_component(post.url.gsub('/', '-').slice(1, 64))
        countapi_url = "https://api.countapi.xyz/get/#{countapi_namespace}/#{url_encoded}"
        puts "CountAPI URL: #{countapi_url}"
        begin
          views = JSON.parse(URI.open(countapi_url).read)['value']
          post.data['views'] = views.to_i || 0
          puts "Views: #{views}"
        rescue OpenURI::HTTPError, JSON::ParserError => e
          next
        end
      end

      # Generate views data for each locale
      locales_views_data = {}

      site.posts.docs.group_by { |post| post.data['locale'] || site.config['default_locale'] }.each do |locale, posts|
        locales_views_data[locale] = {}
        locales_views_data[locale]['date'] = Date.today.strftime('%Y-%m-%d')
        locales_views_data[locale]['posts'] = posts.map do |post|
          guid = post.data['guid']
          title = post.data['title']
          published = post.data['published']
          image = post.data['image']
          views = post.data['views'] || 0

          # Add views difference for last 10 days
          views_history = post.data['views_history'] || []
          views_history << views
          views_history = views_history.last(10) if views_history.size > 10
          views_difference = views_history.last.to_i - views_history.first.to_i
          post.data['views_difference'] = views_difference
          post.data['views_history'] = views_history

          { 'guid' => guid, 'title' => title, 'published' => published, 'image' => image, 'views' => views }
        end
        locales_views_data[locale]['posts'].sort_by! { |data| data['guid'] }
        puts "Updated views data for #{locale} with #{locales_views_data[locale]['posts'].size} posts"
      end

      data_path = File.join(site.source, '_data', 'locales', 'postcountviews.yml')
      yaml_data = locales_views_data.to_yaml.sub(/^---\n/, '').gsub(/\n/m,"\n  ") # supprime la première ligne et ajoute une indentation de 2
      yaml_data = yaml_data.gsub(/^(\s*)(\w{2}_\w{2}:)/, "\\2")  # Supprime l'indentation pour fr_FR
      yaml_data = yaml_data.gsub(/^(\s*)(\w{2}(_\w{2})?:)/, "\n\\2")  # Ajoute une ligne vide pour en_GB
      yaml_data.strip!  # Supprime les espaces en début et fin de chaîne
      File.write(data_path, yaml_data)
      puts "Saved views data to #{data_path}"
    end
  end
end
