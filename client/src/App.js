import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import TeamTable from './components/teamTable/TeamTable';
import PlayerStats from './components/playerStats/PlayerStats';
import Matchups from './components/matchups/Matchups';
import Team from './components/team/Team';

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
      <Team />

    </div>
  );
}

export default App;
