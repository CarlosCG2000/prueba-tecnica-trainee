
import { useEffect, useState } from 'react'
import { fetchRandomFact } from '../logic/hecho.js'

export function useCatFact() {
    const [fact, setFact] = useState()

    async function getRandomFact() {
        const hechoGenerado = await fetchRandomFact() // con el then se resuelve la promesa (que devuelve fetchRandomFact()) y se le pasa el valor resultante al setFact
        setFact(hechoGenerado)
        console.log(`La cita obtenida es: ${fact}`)
    }

    useEffect(() => {
        getRandomFact()
    }, [])

    return { fact, getRandomFact }
}