import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MyContext from './contexts/app.context.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <MyContext.Provider value=''>
                <App />
            </MyContext.Provider>
        </BrowserRouter>
    </>
)
