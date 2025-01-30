require 'rubygems'
require 'feed-normalizer'
require 'yaml'
require 'to_slug'
require 'sanitize'
require 'rss'
require 'fileutils'
require 'nokogiri'

# Méthode pour extraire l'URL de l'image depuis la description
def extract_image_from_description(description)
  doc = Nokogiri::HTML(description)
  img_src = doc.at('img')['src'] if doc.at('img')
  img_src || nil
end

feed_file = "_data/feednews.yml"
locale_data_file = "_data/locales/newsticker.yml"

# Créer le dossier _data/locales s'il n'existe pas
FileUtils.mkdir_p(File.dirname(locale_data_file))

feed = YAML.load_file(feed_file)
feed_data = {}

# En-tête fixe
header_lines = [
  "docs_list_title:",
  "  fr_FR: Dernières Nouvelles",
  "  en_GB: Breaking News",
  ""  # Ajouter une ligne vide après l'en-tête
]

# Écriture des données dans le fichier YAML avec l'en-tête fixe
File.open(locale_data_file, 'w') do |file|
  # En-tête fixe
  header_lines.each { |line| file.puts line }

  feed.each do |feeditem|
    name = feeditem['name']
    feed_url = feeditem['feed']
    feed_langs = Array(feeditem['lang'] || 'fr_FR')  # Utiliser 'fr_FR' par défaut si la langue n'est pas spécifiée

    rss = FeedNormalizer::FeedNormalizer.parse URI.open(feed_url)
    rss.parser = 'SimpleRSS'

    locale_entries = []

    # Utiliser la première entrée sans tri par date
    latest_entry = rss.entries.first
    
    if latest_entry
      title = latest_entry.title.encode('utf-8', :invalid => :replace, :undef => :replace, :replace => '-').gsub(':', ' -')
      entry_url = latest_entry.urls.first
      description = latest_entry.description || latest_entry.content
    
      # Extraction de l'URL de l'image depuis la description
      image_url = extract_image_from_description(description)
    
      feed_langs.each do |feed_lang|
        locale_entry = {'name' => name, 'title' => title, 'url' => entry_url, 'image' => image_url }

        # Utiliser la langue spécifiée dans le fichier d'appel
        feed_data[name] ||= {}
        feed_data[name][feed_lang] ||= []
        feed_data[name][feed_lang] << locale_entry
      end
    end
  end

  # Écriture des données dans le fichier YAML sans les tirets
  file.write(YAML.dump(feed_data).gsub('---', '').strip)
end
