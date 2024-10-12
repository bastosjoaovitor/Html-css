const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1400'

async function getPokemonInfo() {
    const resp = await fetch(URL);
    try {
        if (resp.status === 200) {
            const obj = await resp.json();
            console.log(obj);
            const pokemon = getRandomPokemon(obj.results);
            const pokemon_id = pokemon.url.split('/').filter(Boolean).pop();
            getPokemonName(pokemon);
            getPokemonImage(pokemon_id)
        }
    } catch (error) {
        console.log('ERRO!');
    }
}

function getPokemonName(pokemon) {
    let pokemon_name = document.getElementById('pokemon-name');
    pokemon_name.innerText = pokemon.name;
}

function getPokemonImage(pokemon_id) {
    let pokemon_image = document.getElementById('pokemon-image');
    pokemon_image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_id}.png`;
}

function getRandomPokemon(pokemonList) {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    return pokemonList[randomIndex];
}