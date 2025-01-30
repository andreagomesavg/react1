/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Post from "./models/Post";
import TablerowPost from "./components/TablerowPost";
import {  addPost, deletePost, editPost, getAllposts } from "./api/PostApi";

function App() {
  const [listaPosts, setListaPost] = useState([]);
  const [createPost, setCreatePost] = useState(new Post());

  useEffect(() => {
    getPosts();
    
  }, [])

  const getPosts = async () => {
    const res = await getAllposts();
    const newArray = res.map((r) => new Post(r.id, r.title, r.body, r.userId))
    setListaPost(newArray)
  }

  // funciones de los hanble
  const handleTituloChange = (e) => {
    /**Cambiamos el valor de createPost e introducimos un nuevo objeto
     * el cual tiene la información anterior de createPost, pero cambiando
     * el valor de titulo.
     * Para coger la información que había en createPost sin tener que
     * escribir cada uno de sus parametros, utilizamos el spread operator (...)
     * para que copie sus datos:*/
    setCreatePost({ ...createPost, titulo: e.target.value });
  };

  const handleContenidoChange = (e) => {
    setCreatePost({ ...createPost, contenido: e.target.value });
  };

  const handleUsuarioChange = (e) => {
    setCreatePost({ ...createPost, idUsuario: e.target.value });
  };

  const handleAgregarClick = async () => {
    const newPost = new Post(
      crypto.randomUUID(),
      createPost.titulo,
      createPost.contenido,
      createPost.idUsuario
    );
    const res = await addPost(newPost);
    console.log(res)
    setListaPost([...listaPosts, newPost]);
   
  };

  const handleEditarClick = async  (post) => {
    const res = await editPost(post);
    console.log(res);

    setListaPost(listaPosts.map((p) => {
      if(p.id === post.id){
        return post;
      }else {
        return p;
      }
    }))
  }

  const handleEliminarClick = (post) => {
    deletePost(post.id)
    setListaPost(listaPosts.filter((p)=> p.id !== post.id))
  }

  return (
    <>
      <div className="contenedor_header">
        <h1>CRUD REACT</h1>
      </div>
      <div className="contenedor_inputs">
        <p>Titulo</p>
        <input type="text" onChange={handleTituloChange} />
        <p>Contenido</p>
        <input type="text" onChange={handleContenidoChange} />
        <p>ID Usuario</p>
        <input type="number" onChange={handleUsuarioChange} />
        <button onClick={handleAgregarClick}>AGREGAR</button>
      </div>

      {/* contenedor donde vamos a mostrar los datos */}

      <div className="contenedor_lista">
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Titulo</th>
              <th>Contenido</th>

              {/* botones de editar y eliminar: */}

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* lista donde poder renderizar: */}
            {listaPosts.map((p) => (
              <TablerowPost key={p.id} postProp={p} editar={handleEditarClick} eliminar={handleEliminarClick}></TablerowPost>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
