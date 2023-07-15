import './App.css';
import Header from './components/header/Header';
import LuckCalculator from './components/luckCalculator/LuckCalculator';
import TeamStats from './components/team/teamStats/TeamStats'


function App() {

  return (
    <div className="App">
      <Header></Header>
      <LuckCalculator></LuckCalculator>
    </div>
  );
}

export default App;
