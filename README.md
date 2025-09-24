![Dernier Build](https://github.com/haade-administrator/haade.fr/actions/workflows/actions.yml/badge.svg)

![Dernier déploiement](https://github.com/haade-administrator/haade.fr/actions/workflows/pages/pages-build-deployment/badge.svg)

# Haade next generation

## Installation
- npm Install
- bundle config set --local path 'vendor/bundle'
- bundle install

### todo list

1. verification intégration google google_analytics
2. intégrer Masonry gallery [masonry desandro](https://masonry.desandro.com)
3. Créer une collection _EAN voir exemple jekyll-product-catalog
4. intégration [pwa progressive-web-app jekyll](https://github.com/lavas-project/jekyll-pwa)
5. cookie consent [ orestbida cookieconsent](https://github.com/orestbida/cookieconsent)
6. [creation featured post](https://talk.jekyllrb.com/t/featured-post-or-popular-post/5157) ou [featured post](https://talk.jekyllrb.com/t/featured-post-or-popular-post/5157/2)
7. featured post avec slider appliquer en css overflow-x: auto
8.  [layoutit](https://www.layoutit.com/)
9.  [ search.json + dark-light ](https://jamstackthemes.dev/theme/jekyll-klise/)
[featured post](https://talk.jekyllrb.com/t/featured-post-or-popular-post/5157/2)
11. regarder fonctionnement scraping website avec scrapy, beautifulsoup, puppeteer ou cheerio (https://www.twilio.com/blog/4-outils-web-scraping-node-js)
12. carte produit  [https://designrshub.com/2020/08/free-product-card-css.html]
13. [carte produit avec scene](https://codepen.io/cannap/pen/WxJogO)
14. intégrer le service gratuit pour l'envoi de mail par formulaire [formsubmit](https://formsubmit.co) [voir tuto youtube](https://www.youtube.com/watch?v=Yg6POD0M30w)
15. [regex expression jekyll](https://michaelcurrin.github.io/code-cookbook/recipes/other/regex/)
16. [listmonk mailinglist](https://github.com/knadh/listmonk)
17. Carousel: [comparatif](https://itnext.io/javascript-sliders-will-kill-your-website-performance-5e4925570e2b)
18. [remplacement countapi.xyz par hits](https://hits.sh)
19. [imagekit.io optipise image et test website](https://imagekit.io)

# Jekyll dans docker

à la racine du site haade lancer
```docker compose build --no-cache```

puis

pour finir
```docker compose up```

## reconstruire proprement
docker compose down -v --rmi haade-jekyll

