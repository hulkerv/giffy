import { useState } from "react";
import useGifs from "../../hooks/useGifs";
import { Link, useLocation } from "wouter";

import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const POPULAR_GIF = ["Matrix", "Venezuela", "Colombia", "Ecuador"];

const Home = () => {
  const [keyword, setKeyword] = useState("");

  const [path, pushLocation] = useLocation()

  const {gifs} = useGifs({keyword: 'Rick'})

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="search" id="search" />
        <button>Buscar</button>
      </form>
      <ListOfGifs gifs={gifs}/>
      <h3 className="App-title">Ultima busqueda</h3>
      <ul>
        {POPULAR_GIF.map((popularGif) => (
          <li key={popularGif}>
            <Link
              className="App-link"
              to={`/search/${popularGif}`}
            >
              Gifs de {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
