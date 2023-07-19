function fetchPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`There is no pokemon with ${name} name.`);
      }

      return response.json();
    })
};

const api ={
    fetchPokemon
}

export default api;