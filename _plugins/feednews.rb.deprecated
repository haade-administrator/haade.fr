require 'rubygems'
require 'feed-normalizer'
require 'yaml'
require 'sanitize'
require 'rss'
require 'fileutils'
require 'nokogiri'
require 'net/http'
require 'uri'

# Fichiers YAML
FEED_FILE = "_data/feednews.yml"
LOCALE_DATA_FILE = "_data/locales/newsticker.yml"

# Création du dossier _data/locales s'il n'existe pas
FileUtils.mkdir_p(File.dirname(LOCALE_DATA_FILE))

# Chargement des flux RSS
feeds = YAML.load_file(FEED_FILE)
feed_data = {}

# En-tête fixe YAML
HEADER_LINES = [
  "docs_list_title:",
  "  fr_FR: Dernières Nouvelles",
  "  en_GB: Breaking News",
  ""
]

# Vérifie si un flux est accessible
def rss_accessible?(url)
  uri = URI.parse(url)
  begin
    Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == "https", open_timeout: 5, read_timeout: 5) do |http|
      response = http.head(uri.request_uri)
      return response.is_a?(Net::HTTPSuccess)
    end
  rescue => e
    puts "⚠️ Erreur d'accès au flux #{url}: #{e.message}"
    return false
  end
end

# Gère la récupération et redirections des flux RSS
def fetch_feed(feed_url, limit = 5)
  return nil if limit == 0 # Éviter les boucles infinies sur les redirections

  uri = URI.parse(feed_url)
  begin
    response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == "https", open_timeout: 15, read_timeout: 30) do |http|
      request = Net::HTTP::Get.new(uri.request_uri, { 'User-Agent' => 'Mozilla/5.0' })
      res = http.request(request)

      # Suivi des redirections
      if res.is_a?(Net::HTTPRedirection)
        new_url = res['location']
        puts "🔄 Redirection détectée : #{feed_url} → #{new_url}"
        return fetch_feed(new_url, limit - 1)
      end

      return res.body if res.is_a?(Net::HTTPSuccess)
      puts "⚠️ Erreur HTTP #{res.code} pour #{feed_url}"
    end
  rescue => e
    puts "⚠️ Impossible de récupérer le flux #{feed_url}: #{e.message}"
  end
  nil
end

# Extraction de l'image depuis la description RSS
def extract_image_from_description(description)
  doc = Nokogiri::HTML(description)
  img = doc.at('img')
  img ? img['src'] : nil
end

# Traitement des flux RSS
feeds.each do |feeditem|
  name = feeditem['name']
  feed_url = feeditem['feed']
  feed_langs = Array(feeditem['lang'] || 'fr_FR') # Langue par défaut: fr_FR

  next unless rss_accessible?(feed_url) # Vérification d'accessibilité

  xml = fetch_feed(feed_url)
  next unless xml # Si échec de récupération, passer au suivant

  # Vérification si le XML contient bien du RSS
  unless xml.include?("<rss") || xml.include?("<feed")
    puts "⚠️ Le flux #{feed_url} ne semble pas être un RSS valide."
    next
  end

  rss = FeedNormalizer::FeedNormalizer.parse(xml)
  rss.parser = 'SimpleRSS'

  latest_entry = rss.entries.first
  next unless latest_entry # Vérification si le flux contient au moins une entrée

  title = latest_entry.title.encode('utf-8', invalid: :replace, undef: :replace, replace: '-').gsub(':', ' -')
  entry_url = latest_entry.urls.first
  description = latest_entry.description || latest_entry.content
  image_url = extract_image_from_description(description)

  # Stockage des données
  feed_langs.each do |feed_lang|
    feed_data[name] ||= {}
    feed_data[name][feed_lang] ||= []
    feed_data[name][feed_lang] << { 'name' => name, 'title' => title, 'url' => entry_url, 'image' => image_url }
  end
end

# Écriture des données dans le fichier YAML
File.open(LOCALE_DATA_FILE, 'w') do |file|
  HEADER_LINES.each { |line| file.puts line }
  file.write(YAML.dump(feed_data).gsub('---', '').strip)
end

puts "✅ Fichier YAML mis à jour avec succès !"
