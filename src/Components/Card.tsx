import { useEffect, useState } from "react";
import { Pokemon } from "../Interfaces/interfacePokemon";

interface CardProps {
  pokemon: Pokemon | undefined;
}

const Card = (props: CardProps) => {
  const image =
    props?.pokemon?.sprites?.other?.["official-artwork"].front_default;
  const [placeholder, setPlaceholder] = useState("placeholder");

  const handleOnLoad = () => {
    setPlaceholder("");
  };
  useEffect(() => {
    handleOnLoad();
  }, [placeholder]);
  return (
    <div className={`card placeholder-glow mx-5 `}>
      <img
        src={image}
        className={`card-img-top mh-100 mw-100 ${placeholder}`}
        style={{ width: "200px", height: "200px" }}
        alt="pokemon"
        onLoad={handleOnLoad}
      />
      <div className="card-body">
        <h5 className={`card-title placeholder-glow`}>
          <span className={`${placeholder} col-6 text-capitalize`}>
            {props.pokemon?.name}
          </span>
        </h5>
        <p className={`card-text placeholder-glow`}>
          <p className={`${placeholder} col-4 `}>
            Height: {props.pokemon?.height}
          </p>
          <p className={`${placeholder} col-4`}>
            Weight: {props.pokemon?.weight}
          </p>
          <p className={`${placeholder} col-4 `}>Type:</p>
          {props.pokemon?.types.map((type, i) => {
            return (
              <p key={i} className={`${placeholder} text-capitalize`}>
                - {type.type.name}
              </p>
            );
          })}
        </p>
      </div>
    </div>
  );
};
export default Card;
