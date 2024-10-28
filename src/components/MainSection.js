import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import SelectedPlayers from './SelectedPlayers';
import playersData from '../data/players.json';

function MainSection({ coins, choosePlayer, selectedPlayers, removePlayer }) {
  const [showSelected, setShowSelected] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSelected(false)}>Available</button>
      <button onClick={() => setShowSelected(true)}>
        Selected ({selectedPlayers.length})
      </button>
      {showSelected ? (
        <SelectedPlayers players={selectedPlayers} removePlayer={removePlayer} />
      ) : (
        <div className="player-grid">
          {playersData.map((player) => (
            <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MainSection;
