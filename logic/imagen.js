
import { CAT_ENDPOINT_IMAGE_URL } from '../constants.js' // importamos la url de la API

export const fetchImagen = async (threeFirstWords) => {
    try {
        const response = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=2&fontColor=red&json=true`)
        if (!response.ok) throw new Error('Error al obtener la cita')
        const data = await response.json()
        const { _id } = data
        console.log(_id)
        return `${CAT_ENDPOINT_IMAGE_URL}${_id}/says/${threeFirstWords}?fontSize=2&fontColor=red`
    } catch (error) {
        return console.error(error)
    }
}

