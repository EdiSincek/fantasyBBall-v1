import './App.css';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage'
import { Route, Routes, Link } from 'react-router-dom'
import AllTeamsPage from './pages/AllTeamsPage';


function App() {

  return (
    <div className="App">
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><Link to="/" class="nav-link"><b>Fantasy VZ</b> </Link></li>
            <li class="nav-item"><Link to="/allteams" class="nav-link">All Teams </Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team/:teamId" element={<TeamPage />} />
          <Route path="/allteams" element={<AllTeamsPage />} />
        </Routes>
      </>
    </div >
  );
}

export default App;
