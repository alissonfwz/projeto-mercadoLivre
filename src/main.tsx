import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { register } from 'swiper/element'
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
