import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import TeamTable from './components/teamTable/TeamTable';
import PlayerStats from './components/playerStats/PlayerStats';
import Matchups from './components/matchups/Matchups'

function App() {

  // useEffect(() => {
  //   fetch('http://localhost:3001/api')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div className="App">
      <Header></Header>
      <TeamTable />
      <PlayerStats
        firstName="LeBron"
        lastName="James"
        fgPercentage="51.0%"
        ftPercentage="73.1%"
        threePointersMade="1.6"
        points="25.6"
        assists="7.9"
        rebounds="7.9"
        steals="1.2"
        turnovers="3.7"
        imageUrl="https://s3media.247sports.com/Uploads/Assets/548/529/9529548.jpg"
      />
      <Matchups />

    </div>
  );
}

export default App;
