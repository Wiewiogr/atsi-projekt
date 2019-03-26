import ApiClient from './api_client.js';
import DateFormatter from './date_utils.js';

let Offers = {
    render: async () => {
        let categories = await ApiClient.getFilters('category');
        let cities = await ApiClient.getFilters('city');

        let offers = await ApiClient.getOffers();

        if (offers.length > 0) {
            return /*html*/ `
        <div class="row">
        ${offers
                .reverse()
                .map(offer => {
                    offer.city = cities.find(city => city.id == offer.cityId).name;
                    offer.category = categories.find(
                        category => category.id == offer.categoryId
                    ).name;
                    return offer;
                })
                .map(offer => offer_to_html(offer))
                .join('\n ')}
        </div>
        `;
        } else {
            return /*html*/ `
        <h2 class="text-center">Brak ofert spełniających kryteria.</h2>
        `
        }
    },
    after_render: async () => {
    }
};

function offer_to_html(offer) {
    return /*html*/ `
<div class="col-md-4">
  <div class="card mb-4 shadow-sm">
      <img src="./aukcja.jpg" class="card-img-top" width="100%" alt="Responsive image" />
      <div class="card-body">
          <h5 class="card-title">${offer.name}</h5>
          <p class="card-text text-truncate">${offer.content}</p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal"
                      data-target="#offer-${offer.id}-details-modal">
                      Szczegóły
                  </button>
              </div>
              <small class="text-muted">Cena: ${offer.price} zł</small>
          </div>
      </div>
  </div>
  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="offer-${
        offer.id
        }-details-modal">
      <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${offer.name}</h5>
            </div>
            <div class="modal-body">
                <img src="./aukcja.jpg"  width="100%" alt="${offer.name}"/>
                <hr>
                ${offer.content}
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Kategoria:
                    </div>
                    <div>
                        ${offer.category}
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Miasto:
                    </div>
                    <div>
                        ${offer.city}
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Email kontaktowy:
                    </div>
                    <div>
                        ${offer.contactEmail}
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Cena:
                    </div>
                    <div>
                        ${offer.price} zł
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Czas utworzenia oferty:
                    </div>
                    <div>
                        ${DateFormatter.formatDate(offer.creationTime)} 
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Czas wygaśnięcia oferty:
                    </div>
                    <div>
                        ${DateFormatter.formatDate(offer.expirationTime)} 
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
            </div>
          </div>
      </div>
  </div>
</div>
  `;
}

export default Offers;
