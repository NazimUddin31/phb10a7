// SelectedPlayers.js
import React from 'react';
 
import logo from '../assets/players/virat_kohli.jpeg'; // Import the logo image // Import the logo image

const SelectedPlayers = ({ players, removePlayer }) => (
 <div>

<div className="selected-players">
    <h2>Selected Players</h2>
    {players.map(player => (
     <div>
  <div key={player.id} className="selected-player-card">
  <img src={logo} alt={player.name} />
  
        <h3>{player.name}</h3>
     
        <p>Role: {player.role}</p>
        <p>Price: ${player.price}</p>
        <button onClick={() => removePlayer(player.id)}>Remove</button>
      </div>
</div>



    ))}
  </div>



 


 </div>
);

export default SelectedPlayers;



 
