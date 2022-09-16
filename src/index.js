import * as ReactDomClient from 'react-dom/client'
import React from 'react'
import App from "./App"
import './css/index.css'
const app = ReactDomClient.createRoot(document.getElementById("app"))
app.render(<App/>)