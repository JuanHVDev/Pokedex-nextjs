import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FavoritosPokemonsState {
    favoritePokemonList: number[];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
    deleteAllFavorite: () => void;
}

export const useFavoritosPokemonsStore = create<FavoritosPokemonsState>()(
    devtools(
        persist(
            (set, get) => ({
                favoritePokemonList: [],
                addFavorite: (id) => {
                    if (!get().favoritePokemonList.includes(id))
                        set((state) => ({
                            favoritePokemonList: [
                                ...state.favoritePokemonList,
                                id,
                            ],
                        }));
                },
                removeFavorite: (id) => {
                    set((state) => ({
                        favoritePokemonList: state.favoritePokemonList.filter(
                            (pokemonId) => pokemonId !== id
                        ),
                    }));
                },
                deleteAllFavorite: () => set({ favoritePokemonList: [] }),
            }),
            {
                name: "fav-pokes",
            }
        )
    )
);

// Momento correcto de decirlo, forma correcta, persona correcta
// Nombre: Kathia
//Emocion: Me siento estresado
//Situacion o Motivo: Porque estoy haciendo otras cosas y me estoy estresando
// Objetivo: Podrías ayudarme a tender la ropa
// Tarea
