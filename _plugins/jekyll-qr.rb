# _plugins/qr_code_generator.rb
require 'erb'
require 'jekyll'
require 'rqrcode'
require 'uri'

# Définition de la balise principale pour Jekyll Liquid
class QR < Liquid::Tag
  RQRCODE_OPTIONS = {
    level: :l
  }.freeze

  RQRCODE_SVG_OPTIONS = {
    viewbox: true,
    offset: 44,
    color: "ef1f7d",
    shape_rendering: "optimizeSpeed",
    module_size: 11,
    standalone: true,
    use_path: true
  }.freeze

  def initialize(tag_name, text, tokens)
    super
    @text = text.strip
  end

  def render(context)
    # Récupérer la variable qrlink si elle existe dans le contexte
    qr_content = context[@text] || @text

    # Vérifier si le contenu est une URL
    if url?(qr_content)
      # Si c'est une URL, on l'utilise telle quelle
      qr_content = qr_content
    else
      # Si ce n'est pas une URL, on utilise le texte comme il est
      qr_content = qr_content
    end

    # Génération du QR code
    qr = RQRCode::QRCode.new(qr_content, **RQRCODE_OPTIONS)
    qr_svg = ERB::Util.url_encode(qr.as_svg(**RQRCODE_SVG_OPTIONS).to_s)

    # Retourner l'image SVG du QR code
    "<img class=\"qr-code\" src=\"data:image/svg+xml;utf8,#{qr_svg}\" alt=\"QR Code\">"
  end

  private

  # Méthode pour vérifier si le texte est une URL
  def url?(string)
    uri = URI.parse(string)
    uri.is_a?(URI::HTTP) || uri.is_a?(URI::HTTPS)
  rescue URI::InvalidURIError
    false
  end
end

# Enregistrement de la balise dans Jekyll
Liquid::Template.register_tag 'qr', QR
