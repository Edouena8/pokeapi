import errorImg from '../error.png';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImg} width="240" alt="sadcat" />
      {message}
    </div>
  );
}
