import Favoritos from "@/components/Favoritos"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Favoritos -  Pokedex'
}

function FavoritosPage()
{
  return (<Favoritos />)
}

export default FavoritosPage