'use client'
import { useFavoritosPokemonsStore } from "@/store/favoritos/favoritos.store"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function Favoritos()
{
  const route = useRouter()
  const favoritos = useFavoritosPokemonsStore(state => state.favoritePokemonList)
  const deleteAllFavoritos = useFavoritosPokemonsStore(state => state.deleteAllFavorite)
  const [isClient, setIsClient] = useState(false)

  useEffect(() =>
  {
    setIsClient(true)
  }, [])

  const handleClick = () =>
  {
    deleteAllFavoritos();
    route.push('/')
  }

  return (
    <>

      <div className="flex justify-center my-4">
        <button className="btn btn-primary" onClick={handleClick}>
          Eliminar Todos los Pokemones
        </button>
      </div>
      <div className={`${favoritos?.length > 0 ? 'grid grid-cols-2 2xl:flex justify-center place-content-center lg:grid-cols-3 md:grid-cols-2 gap-3 shadow-xl p-5' : 'grid grid-cols-2 lg:grid-cols-3 gap-4'}`}>
        {
          isClient && favoritos?.length > 0 ? (
            favoritos.map(id => (
              <div className="max-w-lg" key={id}>
                <Link href={'/pokemon/' + id} className="">
                  <div className='card bg-base-300'>
                    <figure className="" >
                      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={`${id}`} width={200} height={200} />
                    </figure>
                  </div>
                </Link>
              </div>
            ))
          ) : <div className="text-center text-4xl">
            <p>
              No hay Pokemones Agrega tus Pokemones favoritos
            </p>
            <Link href={'/'} className="btn btn-ghost text-3xl m-4">Agrega Pokemones</Link>
          </div>
        }
      </div >
    </>
  )
}

export default Favoritos