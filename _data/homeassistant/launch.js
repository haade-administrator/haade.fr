const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeHAblog() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.home-assistant.io/blog/');
    const html = await page.content();
    const $ = cheerio.load(html);

    const articles = [];

    $('.listing').each((i, el) => {
        const title = $(el).find('h1.beta').text().trim().replace(/\n|\r/g, '');
        const date = $(el).find('.meta.clearfix time').text().trim();
        const category = $(el).find('.category').text();
        const author = $(el).find('.byline.author.vcard').text().trim();
        const content = $(el).find('.entry-content.clearfix p').text();
        const htmlcontent = $(el).find('.entry-content.clearfix p').map((i, el) => $(el).html()).get();

        articles.push({
            title,
            date,
            category,
            author,
            content,
        });
    });

    articles.forEach((article, i) => {
        // write article to file
        fs.writeFileSync(`../../_data/homeassistant/scrapers/blog_${i + 1}.json`, JSON.stringify(article, null, 4));
        console.log(`Blog data saved to file product blog_${i + 1}.json.`);
    });
    
    await browser.close();
}

scrapeHAblog();