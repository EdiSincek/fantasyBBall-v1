import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api").then(res => console.log(res));
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
