import { Link, Route } from 'react-router-dom'
import { Button } from 'antd'
import Timer from './component/GlobalTimer'
import timer from './store/index'
import Nprogress from './component/Nprogress'
function App() {
  console.log(process.env.NODE_ENV)

  return (
    <div>
      <header>
        <Link to="/antdLogo">
          <Button>antdLogo</Button>
        </Link>
        <Link to="/reactLogo">
          <Button>reactLogo</Button>
        </Link>
      </header>
      <button
        onClick={() => {
          Nprogress.start()
          setTimeout(() => {
            Nprogress.done()
          }, 2000)
        }}>
        nprogress
      </button>
      <Timer timer={timer} />
      <div></div>
    </div>
  )
}

export default App
