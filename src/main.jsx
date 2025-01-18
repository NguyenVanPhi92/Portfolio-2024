import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { MyAppContext } from './contexts/app.context'
import './i18n/i18n.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <MyAppContext>
        <App />
      </MyAppContext>
    </BrowserRouter>
  </>
)
