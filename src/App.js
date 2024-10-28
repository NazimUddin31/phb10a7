// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import PlayerCard from './components/PlayerCard';
import SelectedPlayers from './components/SelectedPlayers';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import playersData from './data/players.json';
 

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(playersData);

  const addCoins = () => setCoins(coins + 1000000);

  const choosePlayer = (player) => {
    if (coins < player.price) {
      toast.error("Not enough coins!");
      return;
    }
    if (selectedPlayers.find(p => p.id === player.id)) {
      toast.warning("Player already selected!");
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.warning("Player limit reached!");
      return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price);
  };

  const removePlayer = (playerId) => {
    const updatedPlayers = selectedPlayers.filter(player => player.id !== playerId);
    const removedPlayer = selectedPlayers.find(player => player.id === playerId);
    setSelectedPlayers(updatedPlayers);
    setCoins(coins + removedPlayer.price);
  };

  return (
    <div className="app">
      <Navbar coins={coins} />
      <Banner addCoins={addCoins} />
      <div className="main-section">
        <h2>Available Players</h2>
        <div className="player-grid">
          {availablePlayers.map(player => (
            <PlayerCard key={player.id} player={player} choosePlayer={choosePlayer} />
          ))}
        </div>
        <SelectedPlayers players={selectedPlayers} removePlayer={removePlayer} />
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
