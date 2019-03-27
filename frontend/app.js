import Offers from './offers.js';
import Filters from './filters.js';
import OfferCreation from './offer_creation.js';
import StaticPages from './static_pages.js';

const init = async () => {
    const filters = null || document.getElementById('filters');
    filters.innerHTML = '<h2 class="text-center">Ładowanie...</h2>';

    filters.innerHTML = await Filters.render();

    const offerCategories = null || document.getElementById('offer-category');
    offerCategories.innerHTML = await OfferCreation.renderCategories();

    const offerCities = null || document.getElementById('offer-city');
    offerCities.innerHTML = await OfferCreation.renderCities();
};

const loader = async () => {
    const content = null || document.getElementById('site-content');
    content.innerHTML = '<h2 class="text-center">Ładowanie...</h2>';

    content.innerHTML = await Offers.render();
};

const clearModal = async () => {
    document.getElementById('offer-name').value = '';
    document.getElementById('offer-contact-email').value = '';
    document.getElementById('offer-price').value = '';
    document.getElementById('offer-content').value = '';
    document.getElementById('offer-category').selectedIndex = 0;
    document.getElementById('offer-city').selectedIndex = 0;
};

const showStaticPage = page => {
    const content = null || document.getElementById('site-content');
    console.log(`Showing ${page}`)
    content.innerHTML = StaticPages.render(page);
}

init.call();

window.addEventListener('load', loader);
document.getElementById('search-button').addEventListener('click', loader);

document
    .getElementById("open-add-offer-button")
    .addEventListener('click', clearModal);

document
    .getElementById('add-offer-button')
    .addEventListener('click', async () => {
        await OfferCreation.addOffer();
        await loader();
    });

document
    .getElementById('home')
    .addEventListener('click', loader);

document
    .getElementById('about-project')
    .addEventListener('click', () => showStaticPage("about-project"));

document
    .getElementById('about-us')
    .addEventListener('click', () => showStaticPage("about-us"));

document
    .getElementById('rules')
    .addEventListener('click', () => showStaticPage("rules"));

document
    .getElementById('contact')
    .addEventListener('click', () => showStaticPage("contact"));

document
    .getElementById('help')
    .addEventListener('click', () => showStaticPage("help"));
