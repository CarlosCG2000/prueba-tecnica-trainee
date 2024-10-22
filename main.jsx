import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

// para poder realizar el renderizado de la aplicación
const root = createRoot(document.getElementById('app'))

root.render(<App />)

