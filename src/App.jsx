import '../src/App.css'
import { useCatImage } from "../customHooks/useCatImage.js"
import { useCatFact } from "../customHooks/useCatFact.js"
import { Otro } from './Otro.jsx'

export function App() {

    //const [fact, setFact] = useState()
    //const [imageUrl, setImageUrl] = useState()
    const { fact, getRandomFact } = useCatFact() // uso del CUSTOM HOOK, se desestructura el valor de fact y la función getRandomFact
    const { imageUrl } = useCatImage({ fact }) // uso del CUSTOM HOOK,a traves del fact obtenido de useCatFact

    //Todo - SIN ASYNC-AWAIT (BLOQUEANTE)
    /* useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT) // devuelve una promesa con una respuesta
            .then(response => response.json()) // convierte la respuesta en un objeto JSON
            .then(data => {
                const { fact } = data
                setFact(fact) // del json queremos solo el campo fact y queremos que darle el valor

                const threeFirstWords = fact.split(' ', 3).join(' ') //split nos devuelve un array con las palabras separadas por espacio y cogemos las 3 primeras y luego las unimos en un string con el join
                console.log(threeFirstWords)

                fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=2&fontColor=red&json=true`)
                    .then(res => res.json())
                    .then(resp => {
                        const { _id } = resp
                        console.log(_id)
                        setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=2&fontColor=red`)
                    })
            })

    }, []) */ // el array vacío indica que solo se ejecuta laprimera vez que se renderiza el componente
    // ----------------------------------------------------------------

    //Todo - SIN ASYNC-AWAIT (BLOQUEANTE - EL ESTADO DE LA IMAGEN DEPENDE DEL ESTADO DE FACT)
    /*
    const fetchRandomFact = () => { // función que hace la petición fetch
        fetch(CAT_ENDPOINT_RANDOM_FACT) // devuelve una promesa con una respuesta
            .then(response => {
                // Mas tarde se haría: Handle error if !response.ok -->
                if (!response.ok) throw new Error('Error al obtener la cita')
                return response.json()
            }) // convierte la respuesta en un objeto JSON
            .then(data => {
                const { fact } = data
                setFact(fact) // del json queremos solo el campo fact y queremos que darle el valor
            })
            .catch(error => console.error(error)) // tanto error en la respuesta como en la petición fetch
    }
    */
    // para recuperar la cita al cargar la página
    /*
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT) // devuelve una promesa con una respuesta
            .then(response => {
                // Mas tarde se haría: Handle error if !response.ok -->
                if (!response.ok) throw new Error('Error al obtener la cita')
                return response.json()
            }) // convierte la respuesta en un objeto JSON
            .then(data => {
                const { fact } = data
                setFact(fact) // del json queremos solo el campo fact y queremos que darle el valor
            })
            .catch(error => console.error(error)) // tanto error en la respuesta como en la petición fetch

    }, []) // el array vacío indica que solo se ejecuta laprimera vez que se renderiza el componente
    */
    /*
    useEffect(() => {
        fetchRandomFact().then(nuevaFact => setFact(nuevaFact)) // con el then se resuelve la promesa (que devuelve fetchRandomFact()) y se le pasa el valor resultante al setFact
    }, [])
    */
    // para recuperar la imagen al cambiar la cita
    /*
    useEffect(() => {
        if (!fact) return // si fact no tiene valor, no hace nada

        const threeFirstWords = fact.split(' ', 3).join(' ') //split nos devuelve un array con las palabras separadas por espacio y cogemos las 3 primeras y luego las unimos en un string con el join
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=2&fontColor=red&json=true`)
            .then(res => res.json())
            .then(resp => {
                const { _id } = resp
                console.log(_id)
                setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=2&fontColor=red`)
            })
    }, [fact]) // el array vacío indica que solo se ejecuta laprimera vez que se renderiza el componente
    */
    /*
    useEffect(() => {
        if (!fact) return // si fact no tiene valor, no hace nada

        const threeFirstWords = fact.split(' ', 3).join(' ') //split nos devuelve un array con las palabras separadas por espacio y cogemos las 3 primeras y luego las unimos en un string con el join
        console.log(threeFirstWords)

        fetchImagen(threeFirstWords).then(nuevaImagen => setImageUrl(nuevaImagen))
    }, [fact])
    */
    /*
    const handerClick = async () => {
        //DOS FORMAS:
        //1_fetchRandomFact().then(nuevaFact => setFact(nuevaFact))
        //2_
        const newFact = await fetchRandomFact()
        setFact(newFact)
    }
    */
    const handerClick = async () => {
        getRandomFact()
    }
    // ----------------------------------------------------------------

    //Todo - CON ASYNC-AWAIT (TRABAJANDO CON EL VALOR DE FACT DIRECTAMENTE)
    /*
    useEffect(() => {
        async function getRandomFactImage() {
            const response = await fetch(CAT_ENDPOINT_RANDOM_FACT) // devuelve una promesa con una respuesta
            const data = await response.json() // convierte la respuesta en un objeto JSON
            console.log('getRandomFact:'); console.log(data)
            setFact(data.fact) // del json queremos solo el campo fact y queremos que darle el valor

            const threeFirstWords = data.fact.split(' ', 3).join(' ') //split nos devuelve un array con las palabras separadas por espacio y cogemos las 3 primeras y luego las unimos en un string con el join
            //split nos devuelve un array con las palabras separadas por espacio y cogemos las 3 primeras y luego las unimos en un string con el join
            console.log(threeFirstWords)

            const imageResponse = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&fontColor=red&json=true`)
            const imageData = await imageResponse.json()
            console.log('getImageUrl:'); console.log(imageData);
            const { _id } = imageData // destructuring de la respuesta
            setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=2&fontColor=red`)
        }

        getRandomFactImage()

    }, []) // el array vacío indica que solo se ejecuta la primera vez que se renderiza el componente
    */
    // ----------------------------------------------------------------

    //Todo - CON ASYNC-AWAIT (EL ESTADO DE LA IMAGEN DEPENDE DEL ESTADO DE FACT)
    /*
    useEffect(() => {
        async function getRandomFact() {
            const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
            const data = await response.json();
            console.log('getRandomFact:', data);
            setFact(data.fact); // Aquí se actualiza 'fact'
        }

        getRandomFact();
    }, []); // Este useEffect se ejecuta una vez al montar el componente

    //Ahora, utilizamos otro useEffect que depende de 'fact'
    useEffect(() => {
        if (!fact) return // si fact no tiene valor, no hace nada

        const threeFirstWords = fact.split(' ', 3).join(' ');
        console.log(threeFirstWords);

        async function getImageUrl() {
            const response = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&fontColor=red&json=true`);
            const data = await response.json();
            console.log('getImageUrl:', data);
            const { _id } = data;
            setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=2&fontColor=red`);
        }

        getImageUrl();
    }, [fact]); // Este useEffect se ejecutará cada vez que 'fact' cambie
    */
    // ----------------------------------------------------------------

    return (
        <main>
            <h1>APP DE GATITOS</h1>
            <button onClick={handerClick}>Nueva cita</button>
            {fact && <p>{fact}</p>} {/* renderizado condicional si fact no es true, muestra el párrafo */}
            {imageUrl && <img src={imageUrl} alt={`imagen extraida de las 3 palabras de la frase ${fact}`} />}
            {/* <Otro /> */}
        </main>
    )
}





