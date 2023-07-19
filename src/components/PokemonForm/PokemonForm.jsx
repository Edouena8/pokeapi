import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChamge = evt => {
    const { value } = evt.currentTarget;

    this.setState({
      pokemonName: value.toLowerCase(),
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { onSubmit } = this.props;
    const { pokemonName } = this.state;

    if (pokemonName.trim() === '') {
      toast.error("Enter pokemon's name!", { theme: 'dark', autoClose: 3000 });
      return;
    }

    onSubmit(pokemonName);
    this.setState({
      pokemonName: '',
    });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={this.handleNameChamge}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Find
        </button>
      </form>
    );
  }
}

export default PokemonForm;
