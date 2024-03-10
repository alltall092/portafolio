import { Link } from "react-scroll";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Home';
import MiPortafolio from './MiPortafolio';
import About from './About';
import Contact from './Contact';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pdf from './Pdf';
import "./about.css";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar bg="primary" expand="lg"className="header">
      <Container>
        <Navbar.Brand href="#home">J.P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"
            className="link"
            > <i className="fa fa-home"></i>Home</Nav.Link>

            <Nav.Link as={Link} 
              className="link"
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            
            ><i class="fa fa-folder"></i>
            Mi portafolio</Nav.Link>
            <Nav.Link as={Link}
              className="link"
             activeClass="active"
             to="section3"
             spy={true}
             smooth={true}
             offset={-100}
             duration={500}
            
              ><i class="fa fa-laptop-code"></i>My Ability</Nav.Link>
            <Nav.Link  
              className="link"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
             as={Link}>
             <i className="fa-solid fa-address-card"></i>
             About
             </Nav.Link>
           <Nav.Link 
             className="link"
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
             as={Link}>
               <i class="fa fa-message"></i>Contact</Nav.Link>



           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
        <Route path="portafolio"element={<MiPortafolio/>} />
        <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
        <Route path="curriculum" element={<Pdf/>}/>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
