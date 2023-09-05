import React from 'react';
import logo from '../../Assets/Home_Assets/logo.png';
import grp1 from '../../Assets/Home_Assets/Group1.png';

function Home() {
  return (
    <div className="container-fluid" id="home-bg" style={{
      backgroundImage: `url(${grp1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container g-0">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Bootstrap" width="70" height="64" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-lg-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item mx-lg-4">
                <a className="nav-link" href="/">PRODUCT</a>
              </li>
              <li className="nav-item mx-lg-4">
                <a className="nav-link" href="/">PROMO</a>
              </li>
              <li className="nav-item mx-lg-4">
                <a className="nav-link" href="/">ABOUT</a>
              </li>
              <li className="nav-item ms-lg-4">
                <a className="nav-link" href="/">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-7" style={{ color: 'white' }}>
            <h1 style={{ fontSize: '7vw', marginBottom: '30px' }}>Get Cashback up to 50%</h1>
            <p style={{ marginBottom: '30px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto voluptates impedit rerum.
              Consectetur, minima facilis laboriosam incidunt, itaque minus omnis sit quibusdam sed magni sequi quo
              inventore quis nostrum?
            </p>
            <button id="order-btn1">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
