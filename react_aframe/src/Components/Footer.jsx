import React from 'react'
import nav from 'react-bootstrap/nav';

const Footer = () => {
  return (

    <div id='containerfooter' className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/Home" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="/Experience3D" className="nav-link px-2 text-body-secondary">Experience 3D</a></li>
          <li className="nav-item"><a href="/Contacto" className="nav-link px-2 text-body-secondary">Contact</a></li>
        </ul>
        {/* <p className="text-center text-body-secondary"> 2023 Portafolio Greiskel S.</p> */}
      </footer>
    </div>

  );
}
export default Footer;