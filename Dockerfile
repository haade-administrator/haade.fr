# --- Étape 1 : base stable ---
FROM ruby:3.2.5-slim

# --- Étape 2 : dépendances système minimales pour Jekyll et Nokogiri ---
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential \
    git \
    curl \
    nodejs \
    npm \
    libvips \
    libvips-dev \
    libvips-tools \
    libxml2-dev \
    libxslt-dev \
    zlib1g-dev \
    gvfs \
    poppler-utils \
    ghostscript \
    && npm install -g yarn \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# --- Étape 3 : dossier de travail ---
WORKDIR /srv/jekyll

# --- Étape 4 : installation Bundler ---
RUN gem install bundler

# --- Étape 5 : copier les fichiers Gemfile avant les sources pour profiter du cache ---
COPY Gemfile ./

# Copier Gemfile.lock seulement si il existe
RUN if [ -f Gemfile.lock ]; then cp Gemfile.lock ./; else touch Gemfile.lock; fi

# --- Étape 6 : configurer Bundler ---
RUN bundle config set --global path 'vendor/bundle' \
    && bundle config set build.nokogiri --use-system-libraries=true

# --- Étape 7 : installation des gems ---
RUN bundle install --jobs 4 --retry 3

RUN bundle pristine nokogiri

# --- Étape 8 : copier le reste du site ---
COPY . .

# --- Étape 9 : exposer le port et définir la commande par défaut ---
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling", "--livereload"]



