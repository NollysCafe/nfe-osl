import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/theme.scss'
import 'react-toastify/dist/ReactToastify.css'

// Components
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToastContainer } from 'react-toastify'

const container = document.getElementById('root')
if (!container) throw new Error('Root element not found')

const root = ReactDOM.createRoot(container)
root.render(
	<BrowserRouter basename='/nfe-osl/'>
		<App />

		<ToastContainer position='bottom-right' theme='dark' autoClose={3500} newestOnTop={true} />
	</BrowserRouter>
)

void React
