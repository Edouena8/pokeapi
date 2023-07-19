import {ImSpinner} from 'react-icons/im';
import pendingImage from '../pendingImg.jpg';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';

export default function PokemonPendingView({pokemonName}) {

    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                }
            }
        },
        stats: [],
    }

    return (
        <div role="alert">
            <div>
                <ImSpinner size="32"/>
                Loading
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>
    )
}