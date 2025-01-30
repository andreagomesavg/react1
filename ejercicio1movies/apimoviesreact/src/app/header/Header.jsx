import "./Header.css";

const Header = ({changeIndex}) => {
    return(
        <div className="contenedor-header">
            <h1>PROGRESA FILMS</h1>
            <div>
                <button onClick={() => changeIndex(0)}>Directorio</button>
                <button  onClick={() => changeIndex(1)}>Agregar pelicula</button>
            </div>
        </div>
    )
}
export default Header;