# Image Ruby officielle
FROM ruby:latest

# Installer dépendances nécessaires pour Jekyll, Node.js, npm et Yarn
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    nodejs \
    npm \
    libxml2-dev \
    libxslt1-dev \
    libvips \
    libvips-dev \
    libvips-tools \
    gvfs \
    poppler-utils \
    ghostscript \
    && npm install -g yarn \
    && rm -rf /var/lib/apt/lists/*

# Installer Jekyll et Bundler
RUN gem install jekyll bundler

# Créer un dossier de travail
WORKDIR /srv/jekyll

# Copier Gemfile et Gemfile.lock pour utiliser le cache Docker
COPY Gemfile Gemfile.lock ./

# Configurer Bundler pour installer dans vendor/bundle
RUN bundle config set --global path 'vendor/bundle'

# Installer les gems
RUN bundle install

# Exposer le port de Jekyll
EXPOSE 4000

# Commande par défaut (sera remplacée par docker-compose si besoin)
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--livereload", "--force_polling"]


