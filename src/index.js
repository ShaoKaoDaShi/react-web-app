import './public-path'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import timer from './store/index'
import Root from './pages/Root'
import Test from './pages/Test'
function render(props) {
  const { container } = props
  const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      {/* <Route path="/">
        <Redirect to="/home" />
      </Route> */}
      <Route path="/antdLogo" component={Root} />
      <Route path="/reactLogo" component={Test} />
      <Route exact path={['/', '/home']} component={App} />
    </BrowserRouter>,
  )
}
console.log(document.cookie)
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] props from main framework', props)
  timer.setTimer(props?.timer?.secondsPassed + 100)
  render(props)
}

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
} else {
}
export async function unmount(props) {}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
