import {NavBar, NavItem} from "./Navbar.styles"
import { PrimaryBtn, SecondaryBtn, AlertBtn } from "./components/Buttons";
import styled from 'styled-components';

function App() {
  return (
 <>
 <NavBar>
  <NavItem>Home</NavItem>
  <NavItem>About</NavItem>
  <NavItem>Work</NavItem>
  <NavItem>Home</NavItem>
 </NavBar>

 <HeroSection>
    <h1>Title</h1>
    <p>some text</p>
 </HeroSection>

 <PrimaryBtn>Click Me</PrimaryBtn>
 <PrimaryBtn>Second Primary</PrimaryBtn>
 <SecondaryBtn>Secondary</SecondaryBtn>
 <AlertBtn>Alert</AlertBtn>
 <AlertBtn>Alert2</AlertBtn>
 </>
  );
}


export default App;


const HeroSection = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;

  h1{
    background-color: beige;
  }
`;