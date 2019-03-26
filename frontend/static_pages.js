const pagesContent = {
  'about-us': {
    title: 'O nas',
    content: /*html*/`
    Ofertron to portal, która pozwala na zamieszczanie ofert i ich przeglądanie. Istniejemy od 26 marca 2019 roku. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula lacinia, imperdiet libero nec, ultricies mi. Praesent in diam a nulla consequat rhoncus in eu sem. Praesent sit amet dui elit. Vivamus viverra, odio congue tempus varius, eros sem efficitur turpis, at hendrerit quam mi eget nunc. Cras fringilla massa lorem, ac pellentesque tortor sollicitudin non. Suspendisse id ultricies tellus, sed mattis dui. Curabitur a nisl id mi volutpat faucibus. 
    `
  },
  'about-project':{
    title: 'O projekcie',
    content: /*html*/`
    O nas
    `
  },
  rules: {
    title: 'Regulamin',
    content: /*html*/`
    <h3>Regulamin Ofertron</h3>
    <ul>
        <ol><h4>1) Definicje </h4></ol>
        <ul>
            <ol>1.1) Wystawiający -  Vestibulum vitae ligula lacinia, imperdiet libero nec.</ol>
            <ol>1.2) Oferta - Curabitur a nisl id mi volutpat faucibus. </ol>
            <ol>1.3) Ofertron - Suspendisse id ultricies tellus, sed mattis dui.</ol>
            <ol>1.4) ... </ol>
        </ul>
        <ol><h4>2) Postanowienia ogólne </h4></ol>
        <ul>
            <ol>2.1) Regualamin określa warunki korzystania z Ofertron.</ol>
            <ol>2.2) ... </ol>
        </ul>
        <ol><h4>3) Umowa o świadczeniu usług </h4></ol>
        <ul>
            <ol>3.1) Ofertron świadczy usługi.</ol>
                <ul>
                    <ol>3.1.1) Wystawiania ofert.</ol>
                    <ol>3.1.2) ... </ol>
                </ul>    
            <ol>3.2) ... </ol>
        </ul>
    </ul>
    `
  },
  contact: {
    title: 'Kontakt',
    content: /*html*/`
    Skontaktuj się z nami! <br>
    Wyśilj email na <a href="mailto:kontakt@ofertron.pl">kontakt@ofertron.pl</a>.
    `
  },
  help: {
    title: 'Pomoc',
    content: /*html*/`
    Potrzebujesz pomocy? <br>
    Wyśilj email na <a href="mailto:pomoc@ofertron.pl">pomoc@ofertron.pl</a>.
    `
  },
};

let StaticPages = {
  render: page => {
    return /*html*/ `
    <div class="row">
    <div class="col-md-12">
        <div class="card mb-4 shadow-sm">
        <div class="card-body">
            <h5 class="card-title">${pagesContent[page].title}</h5>
            <hr>
            <p class="card-text">${pagesContent[page].content}</p>
        </div>
    </div>
    </div>
      `;
  }
};

export default StaticPages;
