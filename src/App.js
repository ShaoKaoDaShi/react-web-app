import {  Link, Route } from "react-router-dom";
import Root from "./pages/Root";
import Test from "./pages/Test";
import { Button } from "antd";
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
      <div>
      <div></div>
          <Route path="/antdLogo/" component={Root} />
          <Route path="/reactLogo/" component={Test} />
      </div>

    </div>
  );
}

export default App;
