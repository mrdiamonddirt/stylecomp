import styled from 'styled-components';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [openModal, setOpenModal] = useState(false)

  const updateModal = () => {
    setOpenModal(!openModal)
  }
  

  return (
 <>
 <BrowserRouter>
 <NavBar>
  <NavItem to="/">Home</NavItem>
  <NavItem to="/about">About</NavItem>
  <NavItem to="/contact">Contact</NavItem>
 </NavBar>
 <Routes>
  <Route path="/" element={ <Home changeModal={updateModal}/>}/>
  <Route path="/about" element={ <About />}/>
  <Route path="/contact" element={ <Contact />}/>
 </Routes>
 </BrowserRouter>
 </>
  );
}


export default App;


// const HeroSection = styled.div`
//   width: 100vw;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   background-color: white;

//   h1{
//     background-color: beige;
//   }
// `;

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    padding: 20px;
`;

const NavItem = styled(Link)`
    font-size: 16px;
    margin: 0 16px;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    
    &:hover{
        background-color: aqua;
    }
`;