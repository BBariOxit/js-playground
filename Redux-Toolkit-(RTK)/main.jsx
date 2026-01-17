import React from "react"
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from './store'
import App from "./app"



// chạy với vite nha: http://localhost:5173/Redux-Toolkit-(RTK)/index.html
ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)