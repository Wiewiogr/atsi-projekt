let getFilters = async endpoint => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(
      `http://35.228.60.46:8080/${endpoint}`,
      options
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Error getting filter', err);
  }
};

let addOffer = async offer => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(offer)
  };
  console.log(options);
  try {
    const response = await fetch(`http://35.228.60.46:8080/offer`, options);

    if (!(await response.ok)) {
      return null;
    }
    const password = await response.text();
    return password;
  } catch (err) {
    console.log('Error adding offer', err);
    return null;
  }
};

let getOffers = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    let url = `http://35.228.60.46:8080/listing?_=`;

    const query = '' || document.getElementById('search-bar-input').value;
    if (query != '') {
      url += `&q=${query}`;
    }

    const city = getRadioVal(
      document.getElementById('cities-form'),
      'city-radio'
    );

    if (city != -1) {
      url += `&city=${city}`;
    }

    const category = getRadioVal(
      document.getElementById('categories-form'),
      'category-radio'
    );
    if (category != -1) {
      url += `&category=${category}`;
    }

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Error getting documents', err);
  }
};

let ApiClient = {
  getFilters: getFilters,
  addOffer: addOffer,
  getOffers: getOffers
};

function getRadioVal(form, name) {
  if (form == null) {
    return -1;
  }
  var radios = form.elements[name];

  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
}

export default ApiClient;
