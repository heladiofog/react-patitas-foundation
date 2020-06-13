import React from 'react';

const Home = () => (
  <div className="Home">
    <div className="Home-container">
      <div className="Home-items">
        {/* Mascotas */}
        <div className="Pets">
          <div className="Pets-cover">
            <span>🐶</span>
            <div className="Pets-type">
              Adopción
            </div>
          </div>
          <div className="Pets-content">
            <div className="Pets-head">
              <h2>Pet name</h2>
              <i>♂︎</i>
            </div>
          </div>
          <div className="Pets-date">
            <i>🗓</i>
            <span>Date</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;