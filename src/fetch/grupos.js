const baseUrl = process.env.REACT_APP_API_URL;

export const getAllGrupos = () => {

    //http://localhost:8080
    const URL = `${baseUrl}/grupos`;        
    console.log(URL)    

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
//     getAllGrupos    
// };