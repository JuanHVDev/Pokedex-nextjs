import Link from "next/link";
import { PokemonData, Pokemones } from "../../types/types";
import Image from "next/image";
import CardPokemon from "@/components/CardPokemon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lista de Pokemons - Pokedex'
}

async function getPokemones()
{
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  const data: PokemonData = await res.json()
  const pokemones = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  return pokemones
}


export default async function Home()
{
  const pokemones: Pokemones[] = await getPokemones()

  return (
    <main>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 p-3">
        {pokemones.map(pokemon => (
          <CardPokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </main>
  )
}
