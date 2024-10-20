import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";


function App() {
  return (
    <Router>
      <Navbar
        variant="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">
            My Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
      <footer class="App-footer">
      <Container className="text-center">
      <p>@Ode, Kent Bryan N. 2024</p>
      <p>Contact Me: 
        <a href="odekentbryan38@gmail.com">
          odekentbryan38@gmail.com</a>
          </p>
          </Container>
      </footer>
      
    </Router>
  );
}

export default App;