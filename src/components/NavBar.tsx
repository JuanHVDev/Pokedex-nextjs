import Image from "next/image"
import Link from "next/link"

const NavBar = () =>
{
  return (
    <nav className="navbar bg-base-300 px-6">
      <div className="flex-1">
        <Link href={'/'} className="flex place-items-center">
          <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg' width={50} height={50} alt="ditto" />
          <p className="mx-2 text-md lg:text-4xl text-accent font-bold">
            Pokedex
          </p>
        </Link>
      </div>
      <div className="flex-none" >
        <div className="menu menu-horizontal px-2">
          <Link href='/' className="mx-2 btn btn-ghost" >Home</Link>
          <Link href='/favoritos' className="mx-2 btn-ghost btn">Favoritos</Link>
        </div>
      </div>

    </nav>
  )
}

export default NavBar