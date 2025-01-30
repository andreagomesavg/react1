import { jsonPlaceholderBaseUrl } from "../constants/ConstanteApi"

const getAllposts = async () => {
    try{
        const response = await fetch(jsonPlaceholderBaseUrl + "/posts", {
            method: "GET"
        });
        if(!response.ok){
            throw new Error("Error al coger datos")
        }
        const result = await response.json();
        return result;
    }
    catch (err){
        console.error("Error: ", err)
    }
}

const addPost = async (post) => {
    try{
        const response = await fetch(jsonPlaceholderBaseUrl + "/posts", {
            method: "POST",
            body: JSON.stringify(
                {
                    title: post.titulo,
                    body: post.contenido,
                    userId: post.idUsuario
                }
            )
        })
        if(!response.ok){
            throw new Error("Error al crear post")
        }
        const result = await response.json();
        return result;
    }
    catch (err){
        console.error("Error: ", err)
    }
}

const editPost = async (post) => {
    try {
        const response = await fetch(jsonPlaceholderBaseUrl + "/posts/" + post.id, {
            method: "PUT",
            body: JSON.stringify({
                id: post.id,
                title: post.titulo,
                body: post.contenido,
                userId: post.idUsuario

            })
        })
        if(!response.ok){
            throw new Error("Error al actualizar")
        }
        const result = await response.json();
        return result;
    }catch(err){
        console.log("Error: "+ err)
    }
}

const deletePost = async (id) => {
    try {
        const response = await fetch(jsonPlaceholderBaseUrl + "/posts/" + id, {
            method: "DELETE",
        });
        if(!response.ok){
            throw new Error("Error al eliminar post")
        }
        console.log((await response).status)
    } catch(err) {
        console.error(err)
    }
}

export {getAllposts, addPost, editPost, deletePost}