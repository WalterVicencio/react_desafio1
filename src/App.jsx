
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbarr from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';

function App() {

  return (
    <>
      <div>
        <Navbarr />
       {/* <Home /> */}
        {/*<Register />*/}
        <Login />
        <Footer />
      </div>  
    </>
  )
}

export default App
