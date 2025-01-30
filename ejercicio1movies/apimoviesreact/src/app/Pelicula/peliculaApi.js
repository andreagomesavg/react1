const urlBase = "http://localhost:3000/api/v1";
const getAllFilms = async () => {
    try {
        const response = await fetch(urlBase + "/movies", {method: "GET"})
        if (!response.ok){
            throw new Error("Error al coger pelicular")
        }
        const result = await response.json();
        return result;

    }catch(err){
        console.error(err)

    }
}
export {getAllFilms}