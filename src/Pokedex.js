import React from "react";
import './Pokedex.css';
import Pokecard from "./Pokecard";

function Pokedex({pokes}) {
    return (
        <div className="Pokedex">
            <h3 className="Pokedex-title">Pokedex</h3>
            {pokes.map(p => (
                <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.exp} />
            ))}
        </div>
    )
}
export default Pokedex;