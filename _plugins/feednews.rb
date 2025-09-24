require 'feedjira'
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

# Récupère et suit les redirections pour le flux RSS
def fetch_feed(feed_url, limit = 5)
  return nil if limit == 0 # éviter les boucles infinies

  uri = URI.parse(feed_url)
  begin
    response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == "https", open_timeout: 15, read_timeout: 30) do |http|
      request = Net::HTTP::Get.new(uri.request_uri, { 'User-Agent' => 'Mozilla/5.0' })
      res = http.request(request)

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
  doc = Nokogiri::HTML(description || "")
  img = doc.at('img')
  img ? img['src'] : nil
end

# Traitement des flux RSS
feeds.each do |feeditem|
  name = feeditem['name']
  feed_url = feeditem['feed']
  feed_langs = Array(feeditem['lang'] || 'fr_FR')

  next unless rss_accessible?(feed_url)

  xml = fetch_feed(feed_url)
  next unless xml

  # Parse avec Feedjira
  begin
    rss = Feedjira.parse(xml)
  rescue => e
    puts "⚠️ Erreur de parsing Feedjira pour #{feed_url}: #{e.message}"
    next
  end

  latest_entry = rss.entries.first
  next unless latest_entry

  title = latest_entry.title.to_s.encode('utf-8', invalid: :replace, undef: :replace, replace: '-').gsub(':', ' -')
  entry_url = latest_entry.url || latest_entry.entry_id || ''
  description = latest_entry.summary || latest_entry.content
  image_url = extract_image_from_description(description)

  feed_langs.each do |feed_lang|
    feed_data[name] ||= {}
    feed_data[name][feed_lang] ||= []
    feed_data[name][feed_lang] << { 'name' => name, 'title' => title, 'url' => entry_url, 'image' => image_url }
  end
end

# Écriture dans le YAML
File.open(LOCALE_DATA_FILE, 'w') do |file|
  HEADER_LINES.each { |line| file.puts line }
  file.write(YAML.dump(feed_data).gsub('---', '').strip)
end

puts "✅ Fichier YAML mis à jour avec succès !"
