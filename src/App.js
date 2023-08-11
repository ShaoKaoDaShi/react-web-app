import { Link, Route } from "react-router-dom";
import Root from "./pages/Root";
import Test from "./pages/Test";
import { Button } from "antd";
import Timer from './component/GlobalTimer'
import timer from './store/index'
import Nprogress from "./component/Nprogress";
function App() {
  console.log(process.env.NODE_ENV);

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
      <button onClick={()=>{
        Nprogress.start()
        setTimeout(()=>{
          Nprogress.done()

        },2000)
      }}>nprogress</button>
      <Timer timer={timer}/>
      <div>
        <Route path="/antdLogo/" component={Root} />
        <Route path="/reactLogo/" component={Test} />
      </div>
    </div>
  );
}

export default App;
