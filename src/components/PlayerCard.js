import logo from '../assets/players/virat_kohli.jpeg'; // Import the logo image // Import the logo image
import logos from '../assets/players/darrell_steward.jpeg'; // Import the logo image // Import the logo image

import React from 'react';

const PlayerCard = ({ player, choosePlayer }) => (
  <div className="player-card">
   <div>
   <img src={logo} alt={player.name} />
    <h3>{player.name}</h3>
    <p>Country: {player.country}</p>
    <p>Role: {player.role}</p>
    <p>Price: ${player.price}</p>
    <button onClick={() => choosePlayer(player)}>Choose Player</button>
   </div>
   <div>
   <img src={logos } alt={player.name} />
    <h3>{player.name}</h3>
    <p>Country: {player.country}</p>
    <p>Role: {player.role}</p>
    <p>Price: ${player.price}</p>
    <button onClick={() => choosePlayer(player)}>Choose Player</button>
   </div>
   <div>
   <img src={logo } alt={player.name} />
    <h3>{player.name}</h3>
    <p>Country: {player.country}</p>
    <p>Role: {player.role}</p>
    <p>Price: ${player.price}</p>
    <button onClick={() => choosePlayer(player)}>Choose Player</button>
   </div>
   
  </div>
);

export default PlayerCard;
