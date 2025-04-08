import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/icon.css'
import { Header } from './layouts/header'
import { SideMenu } from './layouts/side-menu'
import  Footer  from './layouts/footer'
import Home from './layouts/home'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
      <Home/>
      <SideMenu />
      
      <Footer/>
  </React.StrictMode>
)
