import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}

registerServiceWorker()