import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux'
import { App, ConnectLine } from './components/router'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
    <ConnectLine />
  </Provider>
)
