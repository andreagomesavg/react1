import "/src/app/peliculaCard/PeliculaCard.css"

const PeliculaCard = ({pelicula}) => {
    return(
        <div className="pelicula-card">
            <div className="pelicula-card-poster">
                <img src={pelicula.poster}></img>
            </div>
            <div className="pelicula-card-datos">
                <p>{pelicula.titulo}</p>
                <p className="pelicula-card-anyo">{pelicula.anyo}</p>
            </div>
        </div>
    )
}
export default PeliculaCard;