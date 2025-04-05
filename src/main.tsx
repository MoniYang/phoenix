import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/icon.css'

import { SideMenu } from './layouts/side-menu'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <div className="bg-blackOpacity-1 text-theme-red text-blackOpacity-3 p-4 rounded">
      <h1 className="text-3xl font-bold underline">Hello Tailwind v3.4.3 + React + GitHub Pages 🎉</h1>
    </div> */}
    <SideMenu />
  </React.StrictMode>
)
