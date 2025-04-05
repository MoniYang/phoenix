import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/icon.css'
import { Header } from './layouts/header'
import { SideMenu } from './layouts/side-menu'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <SideMenu />
  </React.StrictMode>
)
