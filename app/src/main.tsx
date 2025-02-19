import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from './store-context.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
