import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock/ComputerClock';
import WorldClock from './components/Clock/WorldClock';


function App(props) {
  return (<div>
    <h1>Clock : Exemplo de acesso a API externa</h1>
    <Clock />
    <WorldClock />
  </div>);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
