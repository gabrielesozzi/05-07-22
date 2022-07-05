// Object methods

// Dato un oggetto prodotto come quello dell'esempio calcoliamo il costo della variante con tutti gli addon attivi facendo la somma di tutti i values dentro product.addons. Usiamo Object.values per ottenere i costi aggiuntivi da sommare al product.price.
// const product = {
//     id: 1,
//     name: "TV",
//     price: 40,
//     addons: {
//       decoder: 10,
//       qled: 40,
//       stereo: 20
//     }
//   };
//   const fullOptionalPrice = 0; usiamo Object.values per sommare ed ottenere -> 110

const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};
const fullOptionalPrice = product.price;

const totalPrice = Object.values(product.addons).reduce(
  (acc, e) => acc + e,
  fullOptionalPrice
);

console.log(`Il risultato della somma è ${totalPrice}`);

// GET/SET

// 1. Implementare una grafica semplice prendendo come spunto [questo shop]( // https://xd.adobe.com/spec/3409f0fd-25f1-4668-428f-d25447f00e7b-4238/screen/d3fb646d-a698-4eea-bb8e-91be0b0ae011/ ).

// La pagina deve comprendere:
// - Lista di prodotti che vengono mostrati. (Possiamo gestire quelli nascosti sia non stampandoli che aggiungendo una classe per applicare un display:none);
// - Paginazione con 3 bottoni per le pagine: (1,2,3).
// - La parte con i filtri possiamo non implementarla al momento

// 2. Partendo dal codice in calce:

// - Scrivere il codice che permette al click su un bottone della paginazione di cambiare shop.page;
// - Implementare il setter per la prop shop.page;
// - Implementare renderHTML in modo da usarla quando necessario aggiornare il contenuto della pagina;
// - Gestire la paginazione, si consiglia di farlo dentro il getter di shop.products.

const getProductHTML = (product) => {
  const { img, name, author, price } = product;
  return `<li> <img src="${img}" alt=""> <p>${name}</p>  <p>${author}</p> <p>${price}€</p></li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 0, // pagina corrente
  _per_page: 2, // numero di risultati per pagina

  get getProducts() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */
    console.log("Stai leggendo i prodotti di ", this.name);
    const startIndex = 0; // ...
    const endIndex = 6; // ...
    // const paginatedProducts = this._products;
    const paginatedProducts = this._products.slice(startIndex, endIndex);
    return paginatedProducts;
  },

  set setProducts(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.getProducts.map(getProductHTML).join("");
    document.body.innerHTML = `
          <h2>BookStore</h2>
          <ul>${productsHTML}</ul>
          <div class="pagesButton">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          </div>
      `;
  },

  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};

shop.setProducts = [
  {
    img: "https://picsum.photos/200/200?random1",
    name: "Il conte di MonteCristo",
    author: "Alexandre Dumas",
    price: 18,
  },
  {
    img: "https://picsum.photos/200/200?random2",
    name: "Il vagabondo delle stelle",
    author: "Jack London",
    price: 14,
  },
  {
    img: "https://picsum.photos/200/200?random3",
    name: "L'assassinio del commendatore",
    author: "Haruki Murakami",
    price: 20,
  },
  {
    img: "https://picsum.photos/200/200?random4",
    name: "L'étranger",
    author: "Albert Camus",
    price: 10,
  },
  {
    img: "https://picsum.photos/200/200?random5",
    name: "L'art de perdre",
    author: "Alice Zeniter",
    price: 15,
  },
  {
    img: "https://picsum.photos/200/200?random6",
    name: "4321",
    author: "Paul Auster",
    price: 22,
  },
];
