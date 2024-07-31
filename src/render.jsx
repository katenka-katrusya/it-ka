import '@/assets/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/components/Router.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))
export const renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  )
}
