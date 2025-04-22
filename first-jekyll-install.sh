#!/bin/bash

# Arrêter le script si une commande échoue
set -e

# Mise à jour et installation des dépendances de base
echo "Installation des paquets requis..."
sudo apt-get update
sudo apt-get install -y curl ruby-full build-essential zlib1g-dev libyaml-dev libvips-dev

# Configuration de l'environnement Ruby Gems
echo "Configuration de Ruby Gems dans ~/.bashrc"
{
  echo '# Install Ruby Gems to ~/gems'
  echo 'export GEM_HOME="$HOME/gems"'
  echo 'export PATH="$HOME/gems/bin:$PATH"'
} >> ~/.bashrc

# Charger les nouvelles variables d'environnement
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"

# Installation de Jekyll et Bundler
echo "Installation de Jekyll et Bundler..."
gem install jekyll bundler

# Installation de NVM (Node Version Manager)
echo "Installation de NVM..."
LATEST_NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${LATEST_NVM_VERSION}/install.sh | bash

# Charger NVM dans le shell courant
export NVM_DIR="$HOME/.nvm"
# shellcheck source=/dev/null
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Vérification de la disponibilité de nvm
command -v nvm

# Installation de Node.js via NVM
echo "Installation de Node.js..."
nvm install node

# Vérification de Node.js
node -v

# Installation des paquets npm
echo "Installation des dépendances npm..."
npm install

# Configuration locale de bundle et installation
echo "Configuration locale de Bundler..."
bundle config set --local path 'vendor/bundle'
bundle install

echo "✅ Installation terminée avec succès."
