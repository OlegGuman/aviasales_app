import ReactDOM from 'react-dom/client'

import { App, ConnectLine } from './components/router'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <ConnectLine />
  </>
)
