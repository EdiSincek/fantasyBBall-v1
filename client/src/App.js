import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage'
import AllTeamsPage from './pages/AllTeamsPage';
import MatchupsPage from './pages/MatchupsPage';


function App() {

  return (
    <div className="App">
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><Link to="/" class="nav-link"><b>Fantasy VZ</b> </Link></li>
            <li class="nav-item"><Link to="/allteams" class="nav-link">All Teams </Link></li>
            <li class="nav-item"><Link to="/matchups" class="nav-link">Matchups </Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team/:teamId" element={<TeamPage />} />
          <Route path="/allteams" element={<AllTeamsPage />} />
          <Route path="/matchups" element={<MatchupsPage />} />
        </Routes>
      </>
    </div >
  );
}

export default App;
