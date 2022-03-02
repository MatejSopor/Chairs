
import './App.css';
import {Navbar, Nav, Container, } from 'react-bootstrap'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {About} from './components/About'
import {Pricing} from './components/Pricing'
import {Home} from './components/Home'
import {Testimonials} from './components/Testimonials'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
        <Pricing className='grid'
            key={item.id}
            {...item}
            
        />
    )
})      

  return (
    <BrowserRouter>
    <div className="App">  
    
      <>
  <Navbar bg="dark" variant="dark">
    <Container className='container'>
    <Navbar.Brand className='navbar' href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link as={Link} to='/pricing'>Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
<div className='container'>

  <Routes>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/pricing' element={cards}></Route>
    <Route path='/' element={<Home/>}></Route>
  </Routes>

    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
