const baseUrl = process.env.REACT_APP_API_URL;

export const getCategoriasByGrupo = async(grupo) => {

    //request(`https://aromo-api.herokuapp.com/categorias/${grupo}`, (error, res, body) => {
    //http://localhost:8080    

    const URL = `${baseUrl}/categorias/${grupo}`;
    console.log(URL)

    //  const respuesta = await fetch(URL);
    //  console.log(respuesta);
    //  const data = await respuesta.json();
    //  console.log(data);
    //  return data;

    return new Promise((resolve, reject) => {
        fetch(URL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            reject(
                "No hemos podido recuperar los datos del servidor. El código de respuesta del servidor es: " +
                response.status
            );
        })
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });    
}

// module.exports = {
//       getCategoriasByGrupo      
// };