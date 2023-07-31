import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMain from './Components/Navbar';
import Experience3D from './Components/Experience3D';
import Home from './Components/Home';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <NavbarMain />
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />}>Home</Route>
          <Route path='/Experience3D' element={<Experience3D />}>Experience3D</Route>
          <Route path='/Contacto' element={<Contacto />}>Contacto</Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


