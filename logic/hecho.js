
import { CAT_ENDPOINT_RANDOM_FACT } from '../constants.js' // importamos la url de la API

export const fetchRandomFact = async () => { // función que hace la petición fetch
    try {
        const response = await fetch(CAT_ENDPOINT_RANDOM_FACT) // devuelve una promesa con una respuesta
        // Mas tarde se haría: Handle error if !response.ok -->
        if (!response.ok) throw new Error('Error al obtener la cita')
        const data = await response.json()
        const { fact } = data
        return fact
    } catch (error) {
        return console.error(error)
    } // tanto error en la respuesta como en la petición fetch
}

// DE FORMA SINCRONA
/*
export const fetchRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT) // devuelve una promesa con una respuesta
        .then(response => { // se resuelve la promesa con el then o el await (si fuera asincrono) y devuelve otra promesa
            return response.json() // se resuelve la promesa con el then o el await (si fuera asincrono)
        })
        .then(data => {
            const { fact } = data
            setFact(fact)
        })
        .catch(error => console.error(error))
}
*/
