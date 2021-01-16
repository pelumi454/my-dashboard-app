import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import DashBoard from './Components/Dashboard/DashBoard'
import AllUsers from './Components/AllUsers/AllUsers'
import Emerald from './Components/Emerald/Emerald'


function App() {
  return (
    <div className="App">
      <Router>
        <DashBoard>
        <div className="row ">
             <Emerald className="col-6"></Emerald>
            <AllUsers className="col-6"></AllUsers>
             </div>
        </DashBoard>
        </Router>
    
    </div>
  );
}

export default App;
