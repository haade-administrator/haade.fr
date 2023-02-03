const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');
const links = require('./../data');
const url = require('url');


let invalidLinkCount = 0;

async function scrapeAliexpress() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Ajouter les cookies nécessaires si nécessaire
  await page.setCookie({
    name: 'aep_usuc_f',
    value: 'site=fra&c_tp=EUR&region=FR&b_locale=fr_FR',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  await page.setCookie({
    name: 'xman_t',
    value: '5VuiEgRT/JpbRhkBGnQLby7Sza6sjMHXr9QdT4TPwBoN8FIpph+jGRKGPe54DxefCX8vFu/BLt+W6VNSNHSrNwPOsUfiunmy1nJd3YJUJN0/ubdnVrRVbZiudTVg1KMAz6szzRkTURky9A8jKzVjSLXmY7Q501uI6B9Bpk7pKhuv7TzNuJq4LJ+jd2fT41snaI8G/eOg9XF1reQTFiuWB6v1RuRynUQL7kP22dVIwWMPERLVj5GYuPSO6SeNwc6hrbE9oI0gVPeCXNkIPJDAU9LIj8PMoOPIGQxYcAYiJSuxrGpiW+R9acBUogfT3drTAbYIs45JWQcBMvN9ENDVDx1FNmx+09FOsiAx4J5ZeHkXQKn3gpr1L+KY20oNua4JIJwuumH1aiWIwDpDthSGrdfWmzNnyDZOVb8U/QMvQ5iB7wzMGJ/H2aUETe9Qpbf+zuL0ofw6EzkiWa9bnp6iyqA7sJ182fPS7HMCvIRcmt4OYvjl06a1tcNSR6wIO2eGvYzab9xKdtxeozwyyXhWIJ0qI8p86t2XsmM0kn5BC7HTUWvZgdFT7hhXccpftbgIbeabofY38y5oxrGtC5XICl+kKolwXFIR8ymQKBfby3t4qhqeHg4PoJRPelm7kZ37eQRZUN71zvnwhGAlcD0pMEm7yJFexDnc',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  await page.setCookie({
    name: 'xman_us_f',
    value: 'x_locale=fr_FR&x_l=0&x_user=FR|rodriguez|nicolas|ifm|169543615&x_lid=fr1049920001&x_c_chg=0&x_as_i=%7B%22aeuCID%22%3A%22%22%2C%22cookieCacheEffectTime%22%3A1675261261973%2C%22isCookieCache%22%3A%22Y%22%2C%22ms%22%3A%220%22%7D&acs_rt=142dc33103ae41cb9de1dcc52fe04020',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  await page.setCookie({
    name: 'xman_us_t',
    value: 'x_lid=fr1049920001&sign=y&rmb_pp=nico@haade.fr&x_user=4ibYjGMtefDUH1/49dQehXYq0nsG2ssee2Jca8UzrlQ=&ctoken=hvtfvgasruqf&l_source=aliexpress',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  for (const link of links) {

    if (!(/^https?:\/\//.test(`https://fr.aliexpress.com/item/${link}.html`))) {
      console.log(`Invalid link: ${link}`);
      invalidLinkCount++;
      continue;
    }
    try {
      await page.goto(`https://fr.aliexpress.com/item/${link}.html`, { timeout: 30000 });
      // do some scraping or other actions here
    } catch (error) {
      console.log(`Erreur lors de la navigation vers https://fr.aliexpress.com/item/${link}.html: ${error}`);
      invalidLinkCount++;
      continue;
    }

    console.log(`Total des liens invalides: ${invalidLinkCount}`);

    await page.waitForSelector('body');

    // Récupérer le contenu HTML de la page
    const html = await page.content();

    const $ = cheerio.load(html);

    const product = {};
    const productId = JSON.parse(link);

    // Récupérer les votes
    votes = $('.overview-rating-average').text() || 0;
    // Récupérer les votes
    const stars = {
      reviews: 0,
    };
    try {
      stars.reviews = $('.product-reviewer-reviews').text().match(/\d+/)[0];
    } catch (error) {
      console.log(`Erreur le produit ${link} n'a pas été noté`);
    };
    // récupérer le prix et la devise
    const globalprice = $('.product-price-value').text().replace(/,/g, ".").replace(/€/g, '').trim();
    const priceArr = globalprice.split(" ");
    const minprice = priceArr[0];
    const maxprice = priceArr[1];
    const currency = "EUR";

    // récupérer le prix special et la devise
    const globalsprice = $('.uniform-banner-box-price').text().replace(/,/g, ".").replace(/€/g, '').trim();
    const spriceArr = globalsprice.split(" ");
    const minspecialprice = spriceArr[0];
    const maxspecialprice = spriceArr[1];

    // passer du prix au prix special automatiquement
    const salePrice = {
      min: (minprice || minspecialprice || 0),
      max: (maxprice || maxspecialprice || 0),
    };
    // récupérer le prix barré
    const globalpricedel = $('.product-price-del').text().replace(",", ".");
    const pricedelArr = globalpricedel.split(" ");
    const pricedel = pricedelArr[1];
    // récupérer le prix spécial barré
    const globalspricedel = $('.uniform-banner-box-discounts span:nth-of-type(1)').text().replace(",", ".");

    // récupérer remise
    const globaldiscount = $('span.product-price-mark').text();
    const globalsdiscount = $('.uniform-banner-box-discounts span:nth-of-type(2)').text();
    const discount = globaldiscount || globalsdiscount || null;

    const pricesdelArr = globalspricedel.split(" ");
    const specialpricedel = pricesdelArr[1];
    // passer du prix barré au prix special barré automatiquement
    const originalPrice = pricedel || specialpricedel || null;


    const title = $('.product-title').text();
    const description = $('div.product-description').html();
    const reference = $('.sku-title-value').text();
    const sale = {
      quantity: 0,
    };
    try {
      sale.quantity = $('div.product-quantity-tip').text().match(/\d+/)[0];
    } catch (error) {
      console.log(`Erreur le produit ${link} n'a pas de quantité`);
    };
    const image = await page.evaluate(() => document.querySelector('.image-view-magnifier-wrap img').src);
    const storeLink = $('.store-name a').attr('href');
    const store = {
      name: $('.store-name').text(),
      url: url.resolve('https://fr.aliexpress.com', storeLink),
      number: storeLink.match(/\d+/)[0],
      feedback: $('.h-store-info i').eq(0).text(),
      followers: $('.h-store-info i').eq(1).text(),
    };



    // Enregistrer les données dans un objet
    const data = {
      product: {
        productId,
        title,
        description,
        reference,
        minsalePrice: salePrice.min,
        maxsalePrice: salePrice.max,
        discount,
        currency,
        originalPrice,
        quantity: sale.quantity,
        image,
        storeInfo: {
          name: store.name,
          url: store.url,
          storeNumber: store.number,
          rating: store.feedback,
          followers: store.followers,
        },
        ratings: {
          totalStar: 5,
          averageStar: votes,
          totalStarCount: stars.reviews,
        },
      },
    };

    // write results to file
    fs.writeFileSync('./_data/aliexpress/fr_FR/scrapers/' + link + ".json", JSON.stringify(data, null, 2));
    console.log(`Données produit enregistrées dans le fichier produit ${link}.json.`);
  }
  await browser.close();
}

scrapeAliexpress();