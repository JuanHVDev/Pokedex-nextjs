'use client'

import { useFavoritosPokemonsStore } from "@/store/favoritos/favoritos.store"
import { Pokemon } from "../../types/types"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


interface ButtonFavoritoProps
{
  id: number
}

const ButtonFavorito = ({ id }: ButtonFavoritoProps) =>
{
  const router = useRouter()
  const addFavorite = useFavoritosPokemonsStore(state => state.addFavorite)
  const favorito = useFavoritosPokemonsStore(state => state.favoritePokemonList)
  const deleteFavorite = useFavoritosPokemonsStore(state => state.removeFavorite)
  const handleClick = () =>
  {
    addFavorite(id)
    toast('Se ha agregado a Favoritos', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() =>
    {
      router.push('/favoritos')
    }, 1000);
  }
  const handleDelete = () =>
  {
    deleteFavorite(id)
    toast("Se ha eliminado de Favoritos", {
      position: "top-right",
      autoClose: 300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    setTimeout(() =>
    {
      router.push('/favoritos')
    }, 1000);
  }
  return (
    <div className="text-white">
      <div>
        {favorito.includes(id) ? (
          <button suppressHydrationWarning onClick={() => handleDelete()} >
            Esta en tus favoritos
          </button>
        ) : (
          <button className="btn btn-outline" onClick={() => handleClick()}>
            ⭐Favoritos
          </button>
        )}

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  )
}

export default ButtonFavorito