import { Component } from 'react';
import PokemonErrorView from 'components/PokemonErrorView/PokemonErrorView';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';
import PokemonPendingView from 'components/PokemonPendingView/PokemonPendingView';
import pokemonApi from 'services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const currName = this.props.pokemonName;

    if (prevName !== currName) {
      this.setState({
        loading: true,
        pokemon: null,
        error: null,
        status: 'pending',
      });

      pokemonApi
        .fetchPokemon(currName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Enter pokemon's name</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    // return (
    //   <div>
    //     <h1>Pokemon Info</h1>
    //     {error && <h1>{error.message}</h1>}
    //     {this.state.loading && <div>Loading...</div>}
    //     {!pokemonName && <div>Enter pokemon's name</div>}
    //     {pokemon && (
    //       <div>
    //         <p>{pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={pokemon.name}
    //           width="240"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
