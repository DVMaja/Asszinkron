let LISTA = [];
let POKEMON = [];
$(function () {
  //console.log("betöltődés után", LISTA);
  
  let vegpont = "adatok.json";
  adatbeolvas(vegpont, LISTA, megjelenit);
  //üres vagy belekerüülnek az adatok?
  console.log("adatbeolvas() metódus után ", LISTA);


  

  //Ditto
  let pokVegpont = "https://pokeapi.co/api/v2/pokemon/1000";
  adatbeolvas(pokVegpont, POKEMON, pokemonMEgjelenit);

  vegpont = "http://localhost:3000/ADATLISTA";
  adatbTorol(vegpont, 2);

  /* vegpont = "https://pokeapi.co/api/v2/item";
  adatbeolvas(vegpont, POKEMON, itemMegjelenit) */
});

function adatbeolvas(vegpont, lista, callbackFv) {
  //promisse
  fetch(vegpont, {
    //kérünk: GET valamit, törlünk: DELET, újj adat: POST
    method: "GET",
  })
    .then((response) => response.json()) // fejlécet státuszt és adatokat tartalmaz
    .then((data) => {
      //console.log(data);
      //console.log(data.ADATLISTA);
      lista = data;
      //onsole.log("fetch adatbeolvasas után ", lista);
      callbackFv(lista);
    })
    .catch((error) => console.log(error));
}

function adatbTorol(vegpont, id) {
  //promisse
  vegpont = vegpont + "/" + id;
  console.log(vegpont);
  fetch(vegpont, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function megjelenit(lista) {
  console.log("megjelenít: ", lista);
}

function pokemonMEgjelenit(adat) {
  console.log(adat);
  //pokemon képének elérési útvonalát

  /* let eleresiUt = adat.sprites.front_default;
    let pokemonNEv = adat.name; */

  const pokeObj = {
    eleresiUt: adat.sprites.front_default,
    pokemonNEv: adat.name,
  };
  //div.pokemonba jelenjen meg a pokemon nevé és képét
  console.log(pokeObj);
  const ELEM = $(".pokemon");
  //elöbb szöveg összeállítása, majd .html-lel kiiratás

  let kiirando = `<h1>${pokeObj.pokemonNEv}</h1>`;
  kiirando += `<div class="kep">
    <img src="${pokeObj.eleresiUt}" alt="${pokeObj.pokemonNEv}">
    </div>`;

  ELEM.html(kiirando);
}
function itemMegjelenit(adat) {}
