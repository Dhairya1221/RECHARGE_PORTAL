import Home from './components/Homepage/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import BSNL from './components/Dashboard/BSNL';
import JIO from './components/Dashboard/JIO';
import IDEA from './components/Dashboard/IDEA';
import Error from "./components/Error/Error.js";
import Aboutus from "./components/Aboutus/Aboutus.js";
import Thankyou from './components/THANKYOU/Thanks';
import Logout from './components/Logout/Logout';
import DASHBOARD from './components/Dashboard/Dashboard';
import Contactus from './components/Contactus/contactus';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/login" element={<Login/>}/>
          <Route exact path ="/signup" element={<Signup/>}/>
          <Route exact path ="/bsnl" element={<BSNL/>}/>
          <Route exact path ="/jio" element={<JIO/>}/>
          <Route exact path ="/idea" element={<IDEA/>}/>
          <Route exact path ="/aboutus" element={<Aboutus/>}/>
          <Route exact path ="/thanks" element={<Thankyou/>}/>
          <Route exact path ="/logout" element={<Logout/>}/>
          <Route exact path ="/dashboard" element={<DASHBOARD/>}/>
          <Route exact path ="/contactus" element={<Contactus/>}/>
          <Route exact path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
