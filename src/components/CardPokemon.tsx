import Image from "next/image";
import { Pokemones } from "../../types/types";
import Link from "next/link";

interface CardPokemonProps
{
  pokemon: Pokemones
}

export default function CardPokemon({ pokemon }: CardPokemonProps)
{
  return (
    <div className="card shadow-xl border border-accent border-2 hover:scale-105 w-64 my-3 mx-2 p-4">
      <Link href={'pokemon/' + pokemon.id}>
        <figure>
          <Image
            className=""
            src={pokemon.img}
            width={150}
            height={50}
            alt={pokemon.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-accent text-2xl "> #{pokemon.id}<span className="capitalize" >
            {pokemon.name}</span></h2>
        </div>
      </Link>
    </div>
  )
}