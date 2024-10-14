import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { MyAppContext } from './contexts/app.context'
import { Provider } from 'react-redux'
import store from './app/store.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <MyAppContext>
                    <App />
                </MyAppContext>
            </Provider>
        </BrowserRouter>
    </>
)
