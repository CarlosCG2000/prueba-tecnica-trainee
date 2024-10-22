import { useEffect, useState } from "react"
import { fetchImagen } from "../logic/imagen.js"

//CUSTOM HOOK: lo bueno es que ahora se convierte en una caja negra
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState() // estado interno de la imagen

    async function generarImagen() {
        if (!fact) return // si fact no tiene valor, no hace nada
        const threeFirstWords = await fact.split(' ', 3).join(' ') //split nos devuelve un array con las palabras separadas por espacio y cogemos las 3 primeras y luego las unimos en un string con el join
        console.log(`Las 3 letras son: ${threeFirstWords}`)

        const imagen = await fetchImagen(threeFirstWords)

        setImageUrl(imagen)
    }

    useEffect(() => {
        generarImagen()
    }, [fact]) //cada vez que cambie el fact se ejecuta el useEffect

    //return { imageUrl: `${CAT_ENDPOINT_IMAGE_URL}${imageUrl}` } // devolvemos el estado de la imagen
    return { imageUrl } // devolvemos el estado de la imagen
}
