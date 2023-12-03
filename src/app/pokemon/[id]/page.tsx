import CardPokemon from "@/components/CardPokemon"
import { Pokemon, PokemonData } from "../../../../types/types"
import Image from "next/image"
import Link from "next/link"
import ButtonFavorito from "@/components/ButtonFavorito"
import { Metadata, ResolvingMetadata } from "next"

interface pokemonPageProps
{
  params: {
    id: string
  }
}

async function getPokemon(id: string)
{
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  const data: Pokemon = await res.json()
  return data
}

export async function generateMetadata(
  { params: { id } }: pokemonPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> 
{
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  const data: Pokemon = await res.json()

  return {
    title: `${data.name} - Pokedex`
  }
}

export async function generateStaticParams()
{
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  const pokemonesData: PokemonData = await res.json()
  const pokemones = pokemonesData.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  return pokemones.map((pokemon) => ({
    id: String(pokemon.id)
  }))
}



export default async function pokemonPage({ params: { id } }: pokemonPageProps)
{
  const pokemon: Pokemon = await getPokemon(id)
  return (
    <div className="card bg-base-300 max-w-4xl shadow-xl lg:card-side mx-auto my-20">
      <figure className="mx-5 p-4">
        <Image src={pokemon.sprites.other?.dream_world.front_default || 'not found'} width={250} height={250} alt={pokemon.name} />
      </figure>
      <div className="card-body">
        <div className="flex gap-32">
          <div>
            <h1 className="card-title text-4xl capitalize my-4">{pokemon.name}</h1>
            <h2 className="text-2xl my-2 mx-5">Sprites:</h2>
          </div>

          <ButtonFavorito id={Number(id)} />

        </div>
        <div className="flex">
          <Image src={pokemon.sprites.front_default} width={100} height={100} alt={pokemon.name} />
          <Image src={pokemon.sprites.front_shiny} width={100} height={100} alt={pokemon.name} />
          <Image src={pokemon.sprites.back_default} width={100} height={100} alt={pokemon.name} />
          <Image src={pokemon.sprites.back_shiny} width={100} height={100} alt={pokemon.name} />
        </div>
        <Link href={'/'} className="btn text-black hover:bg-accent hover:text-black text-white text-2xl ">
          Home
        </Link>
      </div>
    </div>
  )
}