import ApiClient from './api_client.js';

let Filters = {
    render: async () => {
        let categories = await ApiClient.getFilters('category');
        categories.push({id: -1, name: 'Wszystko'});
        let cities = await ApiClient.getFilters('city');
        cities.push({id: -1, name: 'Wszystko'});
        let view = /*html*/ `
<div class="row">
  <div class="col-md-6">
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Kategoria</h5>
        <div class="form-group">
        <form id="categories-form">
          <div class="row">
            ${categories
            .map(category => filter_to_html(category, 'category-radio'))
            .join('\n ')}
            </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Miasto</h5>
        <div class="form-group">
        <form id="cities-form">
          <div class="row">
          ${cities.map(city => filter_to_html(city, 'city-radio')).join('\n ')}
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
         `;
        return view;
    }
};

function filter_to_html(filter, type) {
    return /*html*/ `
    <div class="col-4">
      <label class="radio">
          <input type="radio" name="${type}" value="${filter.id}" checked />  ${
        filter.name
        } 
      </label>
    </div>
    `;
}

export default Filters;
