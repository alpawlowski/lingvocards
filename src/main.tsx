import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import AppProviders from './providers/AppProviders.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
)