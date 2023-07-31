import React, { useState, useEffect } from 'react';
import './css/Portafolio.css';

function Portafolio() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [proyectos, setProyectos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      localStorage.setItem('token', data.token);
      console.log('Token guardado:', data.token);

      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error en el login:', error);
      // Manejar el error de la API
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        const token = localStorage.getItem('token');

        try {
          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            redirect: 'follow',
          };

          const response = await fetch('http://127.0.0.1:8000/api/web_proyects?page=1', requestOptions);
          const data = await response.json();

          setProyectos(data['hydra:member']);
        } catch (error) {
          console.log('error', error);
        }

      }
    };

    fetchData();
  }, [isLoggedIn]);

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{ maxWidth: '600px', maxHeight: '600px', overflow: 'auto' }}>
        {!isLoggedIn ? (
          <div>
            <h2 className="text-center mb-4">Log in</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password
                  "
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark"
                style={{ width: '100%' }}
              >
                Sign in
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="text-center mb-4">Proyects</h3>
            {proyectos.length === 0 ? (
              <p className="text-center">resources are not available</p>
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                {proyectos.map((content) => (
                  <div
                    key={content['@id']}
                    className="card mb-4 me-3"
                    style={{
                      width: '800px',
                      transform: 'rotateY(0deg)',
                      transition: 'transform 0.5s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'rotateY(-10deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'rotateY(0deg)';
                    }}
                  >
                    <div className="card-body">
                      <h4><strong>{content.subtitle}</strong></h4>
                      <h4>{content.title}</h4>
                      <p>{content.description}</p>
                      <p>{content.type}</p>
                      <img className='imgproyect' src={content.image} alt="" />
                      <br />
                      <a
                        href={content.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                      >
                        Source
                      </a>
                      <br />
                      <a
                        href="/Experience3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                      >
                        ¡Let's See!
                      </a>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Portafolio;
