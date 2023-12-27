import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.tsx'

const app = (
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(app)
