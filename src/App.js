import './App.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './paginas/Home/index';
import About from './paginas/Sobre/index';
import Contact from './paginas/Contato/index';
import Products from './paginas/Products/index';
import CarProducts from './paginas/Products/CarProducts/index';
import BikeProducts from './paginas/Products/BikeProducts/index';
import Cadastro from './paginas/Cadastro/index';
import Principal from './paginas/Principal/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const navLinkStyles = ({ isActive }) => ({
      color: isActive ? '#007bff' : '#333',
      textDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'normal',
      padding: '5px 10px'
    });
    return (
      <>
        <BrowserRouter>
          <nav style={{ marginBottom: '20px' }}>
            <NavLink to="/" style={navLinkStyles}>Home</NavLink> | {" "}
            <NavLink to="/cadastro" style={navLinkStyles}>Cadastro</NavLink> | {" "}
            <NavLink to="/contato" style={navLinkStyles}>Contato</NavLink> | {" "}
            <NavLink to="/sobre" style={navLinkStyles}>Sobre</NavLink> | {" "}
            <NavLink to="/products" style={navLinkStyles}>Products</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
            <Route path='/principal' element={<Principal />} />
            <Route path="/products" element={<Products />}>
              <Route path="car" element={<CarProducts />} />
              <Route path="bike" element={<BikeProducts />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
export default App;
