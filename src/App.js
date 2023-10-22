import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
  
      <Router>  
        <Header /> 
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
