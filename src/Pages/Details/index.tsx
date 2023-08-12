import { useState, useRef, useEffect } from "react";
import Card from "../../Components/Card";
import { Pokemon } from "../../Interfaces/interfacePokemon";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const Details = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const loader = useRef(false);
  const { id } = useParams();

  const fetchPokemon = async () => {
    try {
      loader.current = true;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      loader.current = false;
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return <>{!loader ? <Loader /> : <Card pokemon={pokemon} />}</>;
};
export default Details;
