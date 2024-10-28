// Banner.js
import React from 'react';

const Banner = ({ addCoins }) => (
  <div className="banner">
    <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p>Beyond Boundaries Beyond Limits</p>
    <button onClick={addCoins}>Claim Free Credit</button>
  </div>
);

export default Banner;
