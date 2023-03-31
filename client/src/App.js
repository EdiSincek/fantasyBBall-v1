import './App.css';
import Header from './components/header/Header';
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

      <Team />

    </div>
  );
}

export default App;
