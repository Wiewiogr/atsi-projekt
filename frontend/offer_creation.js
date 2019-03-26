import ApiClient from './api_client.js';
import DateFormatter from './date_utils.js';

let OfferCreation = {
  renderCategories: async () => {
    let categories = await ApiClient.getFilters('category');
    let view = /*html*/ `
              ${categories
                .map(
                  category =>
                    `<option value="${category.id}">${category.name}</option>`
                )
                .join('\n ')}
           `;
    return view;
  },
  renderCities: async () => {
    let cities = await ApiClient.getFilters('city');
    let view = /*html*/ `
                ${cities
                  .map(
                    city => `<option value="${city.id}">${city.name}</option>`
                  )
                  .join('\n ')}
             `;
    return view;
  },
  addOffer: async () => {
    let offer = {
      name: '' || document.getElementById('offer-name').value,
      categoryId: getSelected('offer-category'),
      cityId: getSelected('offer-city'),
      expirationPeriod: getSelected("offer-expiration-period"),
      price: 0 || document.getElementById('offer-price').value,
      content: '' || document.getElementById('offer-content').value,
      contactEmail: '' || document.getElementById('offer-contact-email').value
    };
    const expirationDate = await ApiClient.addOffer(offer);
    if (expirationDate != null) {
      document.getElementById(
        'offer-delete-expiration-date'
      ).textContent = DateFormatter.formatDate(Number(expirationDate));
      $('#offerCreationSuccess').modal('show');
    } else {
      var errorReasons = '';
      if (offer.name == '') {
        errorReasons += /*html*/ `
            <hr>
            Nazwa nie może być pusta.
          `;
      }

      if (offer.content == '') {
        errorReasons += /*html*/ `
          <hr>
          Treść oferty nie może być pusta.
        `;
      }

      if (offer.contactEmail == '') {
        errorReasons += /*html*/ `
          <hr>
          Email kontaktowy nie może być pusty.
        `;
      }

      if (offer.price == 0) {
        errorReasons += /*html*/ `
          <hr>
          Cena nie może być pusta ani równa 0.
        `;
      }

      if (isNaN(offer.price)) {
        errorReasons += /*html*/ `
          <hr>
          Cena musi być liczbą.
        `;
      }

      document.getElementById(
        'offer-creation-failure-reasons'
      ).innerHTML = errorReasons;

      $('#offerCreationError').modal('show');
    }
  }
};

function getSelected(id) {
  const e = document.getElementById(id);
  return e.options[e.selectedIndex].value;
}

export default OfferCreation;
