
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="App">
    
     <Router>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/team/:teamId">
           <TeamDetails></TeamDetails>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
