import './App.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './paginas/Home/index';
import About from './paginas/Sobre/index';
import Contact from './paginas/Contato/index';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/contato">Contato</Link> | {" "}
            <Link to="/sobre">Sobre</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
export default App;
