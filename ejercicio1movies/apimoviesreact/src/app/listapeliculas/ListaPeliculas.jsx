import { useEffect } from "react";
import { useState } from "react"
import Pelicula from "../pelicula/Pelicula"
import { getAllFilms } from "../Pelicula/peliculaApi";
import PeliculaCard from "../peliculaCard/PeliculaCard";

const ListaPeliculas = () => {
    const [listaPeliculas, setListaPleiculas] = useState([]);
    useEffect(() => {
        getPeliculas()
    }, [])

    const getPeliculas = async () => {
        const res = await getAllFilms();
        const newArray = res.status.map((p)=>
        new Pelicula(
            p.id,
            p.imdb,
            p.title,
            p.year,
            p.director,
            p.plot,
            p.genres,
            p.poster
        ))
        setListaPleiculas(newArray)
    }
    return(
        <div className="contenedor-lista">
            {listaPeliculas.map((p) => (
                <PeliculaCard key={p.id} pelicula={p}></PeliculaCard>
            ))}
        </div>
    )
}
export default ListaPeliculas;