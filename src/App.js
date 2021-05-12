import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/hello'
import Message from './Components/message'
import Counter from './Components/counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p> This is children props</p>
        </Greet>
      <Greet name = "clark" heroName = "Batman 1">
        <button>Action</button>
        </Greet>
      <Greet name = "Diana" heroName = "Wonderwoman"/>

      <Welcome/>
      <Hello/> */}

    </div>
  );
}

export default App;
