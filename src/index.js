import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ScreenProvider from './context/ScreenProvider'

ReactDOM.render(
  <React.StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
