import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './route/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Route></Route>
  </StrictMode>,
)
