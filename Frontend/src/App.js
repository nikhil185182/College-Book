import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Main from './components/Main';
import MainNavigation from './components/MainNavigation';
import Logout from './components/Logout';
import Stats from './components/Stats';

function App() {
  return(
    <Router>
            <div>
             <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Register/>}/>  
              <Route exact path="/contact" element={<Contact/>}/>  
              <Route exact path="/logout" element={<Logout/>}/>  
              <Route exact path="/stats" element={<Stats/>}/>  
             </Routes>
            </div>
    </Router>
  );
}

export default App;
