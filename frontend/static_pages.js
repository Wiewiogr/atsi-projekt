const pagesContent = {
    'about-us': {
        title: 'O nas',
        content: /*html*/`
    Ofertron to portal, która pozwala na zamieszczanie ofert i ich przeglądanie. Istniejemy od 26 marca 2019 roku. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula lacinia, imperdiet libero nec, ultricies mi. Praesent in diam a nulla consequat rhoncus in eu sem. Praesent sit amet dui elit. Vivamus viverra, odio congue tempus varius, eros sem efficitur turpis, at hendrerit quam mi eget nunc. Cras fringilla massa lorem, ac pellentesque tortor sollicitudin non. Suspendisse id ultricies tellus, sed mattis dui. Curabitur a nisl id mi volutpat faucibus. 
    `
    },
    'about-project': {
        title: 'O projekcie',
        content: /*html*/`
    <h3>Opis serwisu</h3>
    Ofertron to serwis, który pozwala na dodawanie ogłoszeń sprzedaży oraz ich przeglądanie. Oferty mogą być dodane w ramach jakiejś kategorii oraz jakiegoś miasta. 
    Oferta wygasa po jakimś czasie, jest to wybierane w trakcie jej tworzenia. 
    Oferta posiada również cenę, email kontaktowy do wystawiającego ofertę oraz treść.
    Jest możliwość przeglądania ofert. Można zadać jakieś filtry - miasto z którego oferty powinny być wyświetlone, albo kategorię. 
    Można również wyszukiwać po nazwach. Można wyświetlać szczegóły ofert.
    <hr>
    <h3>Technologie</h3>
    Aplikacja została stworzona jako single page application tzn. strona, która w dynamiczny sposób zmienia swoją treść bez koniecznośći jej przeładowania. 
    Tak zostało wszystko w niej zrealizowane. Np. przyciśniecie "szukaj" wykonuje zapytanie do aplikcaji serwerowej przez interfejs REST, który pobiera dane z bazy danych, wysyła do strony i tam jest dynamiczne aktualizowana.
    Strona jest responsywna dzięki zastosowaniu frameworka bootstrap, cały wygląd strony opiera się na tej bibliotece. 
    Aplikacja frontendowa jest napisana w czystym javascript bez zastosowania żadnych frameworków. 
    Wyświetla ona dane, które udostępnia jej aplikacja serwerowa - backend napisany w kotlinie. 
    Udostępnia on interfejs REST, przez który można pobrać oferty, kategorie i miasta, jak również dodać ofertę. Wszystkie dane przechowywane są w relacyjnej bazie danych Postgres.
    <hr>
    <h3>Infrastruktura</h3>
    Strona hostowana jest w Google Cloud platform korzystając z usługi google storage. 
    Domena korzysta z serwerów nazw googlowych, które przekierowują go na ten google storage, w którym przetrzymywane są statyczne pliki *.html oraz *.js, które składają się na aplikację frontendową. 
    Serwer backendowy działa na Google compute engine, a baza danych w usłudze Google Cloud SQL.
    <hr>
    <h3>Nawigacja</h3>
    Nawigacja na stronie jest moim zdaniem bardzo intuicyjna. 
    Główną funkcjonalnością strony jest przeglądanie i dodawnaie ofert stąd pasek wyszukiwania, przycisk "szukaj" oraz "dodaj ofertę" są na pierwszym planie. 
    Pozostałe - mniej uczęszczane zakładki znajdują się na górze strony
    
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
