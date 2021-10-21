import '../App.css';
import Main from "./Main";
import Profile from "./Profile";
import Error from "./Error";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <>
     <Router>
         <Switch>
             <Route exact path='/' component={Main}/>
             <Route exact path='/profile' component={Profile}/>
             <Route component={Error}/>
         </Switch>
     </Router>
    </>
  );
}

export default App;
