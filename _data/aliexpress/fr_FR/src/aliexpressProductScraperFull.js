const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const Variants = require('./variants');
const Feedback = require('./feedback');

// load cookie function
const cookie = {
    name: 'aep_usuc_f',
    value: 'site=fra&province=907200100001000000&city=907200100001135000&c_tp=EUR&x_alimid=2299046143&isfb=y&ups_d=1|1|1|1&isb=y&ups_u_t=1675349909049&region=FR&b_locale=fr_FR&ae_u_p_s=2',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
}

async function AliexpressProductScraper(productId, feedbackLimit) {
    const FEEDBACK_LIMIT = feedbackLimit || 10;
    const browser = await puppeteer.launch()
    process.setMaxListeners(Infinity);
    const page = await browser.newPage();
    await page.setCookie(cookie)
    await page.setDefaultNavigationTimeout(0);

    /** Scrape the aliexpress product page for details */
    await page.goto(`https://www.aliexpress.com/item/${productId}.html`);
    const aliExpressData = await page.evaluate(() => runParams);

    /** Products shipping charges data */
    const product = {};
    product.properties = [];
    const properties = await page.evaluate(async (product) => {
        function delay(time) {
            return new Promise(function (resolve) {
                setTimeout(resolve, time)
            });
        }

        function checkAvaliblity(name) {
            return new Promise(async function (resolve) {
                return checkExist = await setInterval(async function (resolve) {
                    let selectQuery = await document.querySelector(name);
                    if (selectQuery) {
                        console.log("Exists!");
                        resolve();
                        clearInterval(checkExist);
                    }
                }, 100, resolve);
            });
        }

        get_product_variants = async function (product) {
            product.variants = [];
            variant_paths = [];
            let openDropdown = false;
            if (product.properties.length == 0) {
                return [];
                // throw new Error("Chris- no variants");
            }
            //Recursively iterates over variant combinations.
            const generatePaths = async (path) => {
                if (path.length < product.properties.length) {
                    const propIndex = path.length;

                    for (const item of product.properties[propIndex].values) {
                        const nextPath = [...path, item];
                        await generatePaths(nextPath);
                    }
                } else {
                    variant_paths.push(path);
                }
            };
            const evaluateVariantPath = async (path) => {
                try {
                    console.log("evaluating path for " + path);
                    // await this.driver.sleep(150);
                    await delay(150)

                    //Selects variant properties on UI
                    for (const item of path) {
                        await item.elem.click();
                        await delay(150)
                    }

                    await getVariantDetails(path);

                    //Deselects Variant Properties on UI
                    for (const item of path) {
                        await item.elem.click();
                        await delay(150)
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            const getVariantDetails = async (path) => {
                const variant = {};
                variant.title = path.map((e) => e.name).join(" | ");

                const priceElem = await document.querySelector("div.uniform-banner-box span.uniform-banner-box-discounts span");
                variant.price = await priceElem?.textContent;

                const maxQuant = await document.querySelector("div.product-quantity-tip");
                variant.maxQuant = await maxQuant?.textContent;

                variant.shipping = {};
                for (const country of ["France"]) {
                    variant.shipping[country] = [];
                    await checkAvaliblity("span.product-shipping-info");
                    const shippingDialogLink = await document.querySelector("span.product-shipping-info");
                    await shippingDialogLink.click();
                    await checkAvaliblity("div.address span.zoro-ui-select");

                    const shippingAddressControl = await document.querySelector("div.address span.zoro-ui-select");
                    await delay(500)
                    await shippingAddressControl.click();
                    await delay(500)
                    const clickOnInput = await document.getElementsByClassName("next-select next-select-trigger")[0].click();
                    openDropdown = true;
                    await delay(2000)
                    await checkAvaliblity("div.address input#ae-search-select-1");

                    const shippingInput = await document.querySelector("div.address input#ae-search-select-1");
                    await shippingInput.click();
                    await delay(500)
                    const countryOption = await document.querySelectorAll("div.address ul.dropdown-content li.next-menu-item");
                    for (let i = 0; i <= countryOption.length; i++) {
                        if (countryOption[i]?.innerText === country) {
                            await countryOption[i].click();
                        }
                    }
                    await delay(2000);
                    const noShipping = await document.querySelectorAll("div.logistics div.next-message-warning.logistics-note");
                    if (noShipping.length === 0) {
                        let shipOptionsAll = await document.querySelectorAll("div[role=dialog] div[role=radiogroup] div.table-tr")
                        const shippingOptions = (Array.from(shipOptionsAll)).slice(1);
                        for (const carrierElem of shippingOptions) {
                            const carrier = {};
                            const columns = await carrierElem.querySelectorAll("div.table-td");
                            carrier.delivery = await columns[1].textContent;
                            carrier.cost = await columns[2].textContent;
                            carrier.country = country;

                            carrier.tracking =
                                (await columns[3].querySelectorAll("i.next-icon-select"))
                                    .length > 0;
                            carrier.name = await columns[4].textContent;
                            variant.shipping[country].push(carrier);
                        }
                    }
                    const closeShippingDialog = await document.querySelector("div[role=dialog] a.next-dialog-close");
                    await closeShippingDialog.click();
                    await delay(150)
                    variant.enter = await getVariantDetails;
                    product.variants.push(variant);
                }

            };

            await generatePaths([]);


            for (const path of variant_paths) {
                await evaluateVariantPath(path);
            }
        };


        let resultsSelector = ".sku-property";
        const skuPropertiesAll = Array.from(document.querySelectorAll(resultsSelector));
        const skuProperties = [];
        for (let i = 0; i <= skuPropertiesAll.length; i++) {
            if (skuPropertiesAll[i]) {
                if (skuPropertiesAll[i].querySelector("div.sku-title").textContent === 'Ships From: ') {
                    skuProperties.push(skuPropertiesAll[i]);
                }
            }
        }

        const ProductData = await Promise.all(skuProperties.map(async (prop, index) => {
            const propOutput = {values: [], elem: prop};
            const propTitleElem = prop.querySelector("div.sku-title");
            propOutput.title =  propTitleElem.textContent;
            const propValues = Array.from(prop.querySelectorAll("li.sku-property-item"));
            await Promise.all(propValues.slice(0, 1).map(async (value, i) => {
                if (propValues.length > 1) {
                    await value.click();
                }
                const nameElem = await prop.querySelector("span.sku-title-value");
                const name =  value.innerText;
                const imgUrl = value?.firstChild?.firstChild?.currentSrc
                propOutput.values.push({name, imgUrl, elem: value});
                await value.click();
            }))
            product.properties.push(propOutput);
            return product;
        }));
        await get_product_variants(product);
        product.properties = product.properties.map((data) => {
            const values = data.values.map((value) => {
                return {...value, elem: ''}
            })
            return {...data, elem: '', values}
        });
        return product;
    }, product);
    product.properties = properties;

    const data = aliExpressData.data;

    /** Scrape the description page for the product using the description url */
    const descriptionUrl = data.descriptionModule.descriptionUrl;
    await page.goto(descriptionUrl);
    const descriptionPageHtml = await page.content();

    /** Build the AST for the description page html content using cheerio */
    const $ = cheerio.load(descriptionPageHtml);
    const descriptionData = $('body').html();

    /** Fetch the adminAccountId required to fetch the feedbacks */
    const adminAccountId = await page.evaluate(() => adminAccountId);
    await browser.close();

    let feedbackData = [];

    if (data.titleModule.feedbackRating.totalValidNum > 0) {
        feedbackData = await Feedback.get(
            data.actionModule.productId,
            adminAccountId,
            data.titleModule.feedbackRating.totalValidNum,
            FEEDBACK_LIMIT
        );
    }

    /** Build the JSON response with aliexpress product details */
    const json = {
        title: data.titleModule.subject,
        categoryId: data.actionModule.categoryId,
        productId: data.actionModule.productId,
        totalAvailableQuantity: data.quantityModule.totalAvailQuantity,
        description: descriptionData,
        orders: data.titleModule.tradeCount,
        storeInfo: {
            name: data.storeModule.storeName,
            companyId: data.storeModule.companyId,
            storeNumber: data.storeModule.storeNum,
            followers: data.storeModule.followingNumber,
            ratingCount: data.storeModule.positiveNum,
            rating: data.storeModule.positiveRate
        },
        ratings: {
            totalStar: 5,
            averageStar: data.titleModule.feedbackRating?.averageStar,
            totalStartCount: data.titleModule.feedbackRating.totalValidNum,
            fiveStarCount: data.titleModule.feedbackRating.fiveStarNum,
            fourStarCount: data.titleModule.feedbackRating.fourStarNum,
            threeStarCount: data.titleModule.feedbackRating.threeStarNum,
            twoStarCount: data.titleModule.feedbackRating.twoStarNum,
            oneStarCount: data.titleModule.feedbackRating.oneStarNum
        },
        images:
            (data.imageModule &&
                data.imageModule.imagePathList) ||
            [],
        feedback: feedbackData,
        variants: Variants.get(data.skuModule),
        specs: data.specsModule.props,
        currency: data.webEnv?.currency,
        originalPrice: {
            min: data.priceModule.minAmount?.value,
            max: data.priceModule.maxAmount?.value
        },
        salePrice: {
            min: data.priceModule.minActivityAmount?.value,
            max: data.priceModule.maxActivityAmount?.value
        },
        shippingPrices: product?.properties?.variants[0]?.shipping
    };

    return json;
}

module.exports = AliexpressProductScraper;
