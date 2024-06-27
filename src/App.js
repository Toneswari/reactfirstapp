import logo from './logo.svg';
import './App.css';
import {Greet}  from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import Conditionalcomponent from './components/Conditionalcomponent';
import Message from './components/Message';
import Counter from './components/Counter';
import Form from './components/Form';
function App() {
  const seatNumbers=[1,4,7];
  const person={
    name:"Toneswari",
    message:"Hello",
    seatNumbers:[1,4,7]
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet></Greet> */}
      {/* <Welcome></Welcome> */}
      {/* <Hello person={person}/> */}
      {/* <Fruits/> */}
      {/* <Conditionalcomponent/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      <Form/>
    </div>
  );
}

export default App;
