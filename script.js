let pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

//DOM MANIPULATION
let dropdown = document.getElementById('dropdown');
let buildName = document.getElementById('name');
let buildType = document.getElementById('type');
let buildAbility = document.getElementById('abilities');
let buildOption = document.createElement('option');


//FETCH #1
function fetchPokemon() {
    fetch(pokeUrl)
     .then(function (response) {
         return response.json()
     })
     .then(function(json){
     json.results.forEach(function(pokemon){
         //console.log(pokemon);
        //makeOptions(json)
       fetchPokeData(pokemon); 
     })
    })
   }

//FETCH #2 to get the larger scope of data for each Pokemon via the 'url' object value for each Pokemon
function fetchPokeData(pokemon) {
    // The following line of code is assigning the url array value of a Pokemon entry variable within a fetch
    let pokeUrl = pokemon.url
      fetch(pokeUrl)
      .then(function (response) {
          return response.json()
      })
      .then(function(json) {
      console.log(json)
      //makeOptions(json)
      })
    }

fetchPokemon();

//Populating Dropdown List for Pokemon Names
function makeOptions(json) {
    let allPokemon = json.results;
    console.log(allPokemon);
    for(pm of allPokemon) {
        console.log(pm);
            buildOption.innerHTML = pm.name;

            dropdown.options.add(buildOption);

            //let select = document.getElementById('dropdown');
            dropdown.appendChild(buildOption);
    }
}





// function fetchUrl() {
//     fetch(url)
//     .then(function (response) {
//         return response.json()
//     }).then(function (json) {
//         //console.log(json);
//         json.results.forEach(function(pokemon) {
//             fetchPokemonUrls(pokemon);
//         })
//     })
// }

// fetchUrl();

// function fetchKantoPokemon(){
//     fetch(url)
//      .then(response => response.json())
//      .then(function(allpokemon) {
//      allpokemon.results.forEach(function(pokemon){
//        fetchPokemonUrls(pokemon); 
//      })
//     })
//    }

// function fetchPokemonUrls() {
//     let url = pokemon.url
//     fetch(url)
//     .then(function (response) {
//         return response.json()
//     }).then(function (pokeUrl) {
//         console.log(pokeUrl)
//     })
// }