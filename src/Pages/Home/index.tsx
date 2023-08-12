import { useEffect, useState } from "react";
import { Pokemon } from "../../Interfaces/interfacePokemon";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import Card from "../../Components/Card";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async (currentPage: number) => {
    setPokemon([]);
    let init = currentPage - 1;
    for (let i = init * 20 + 1; i <= currentPage * 20; i++) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        setPokemon((state) => {
          state = [...state, data];
          return state;
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    try {
      setPokemon([]);
      setLoader(true);
      fetchData(currentPage);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  const increasePage = () => {
    setCurrentPage(currentPage + 1);
  };

  const decreasePage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1>Cards</h1>
          <button onClick={() => increasePage()}>Next</button>
          <button onClick={() => decreasePage()}>Previous</button>

          {pokemon?.map((item, i) => {
            return (
              <div key={i}>
                <Link to={`/pokemon/${item.id}`}>
                  <Card pokemon={item} />
                </Link>
              </div>
            );
          })}
          <button onClick={() => increasePage()}>Next</button>
          <button onClick={() => decreasePage()}>Previous</button>
        </div>
      )}
    </>
  );
};

export default Home;
