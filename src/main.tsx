import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/main.scss'

// Components
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Root element not found')

const root = ReactDOM.createRoot(container)
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

void React
