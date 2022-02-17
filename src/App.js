
import './App.css';
import TwitterCounter from './Exercises/TwitterCounter/index.js';
import PasswordChecker from './Exercises/PasswordChecker/index.js';
import AlphanumericPassword from './Exercises/AlphanumericPassword/index.js';
import DisableSubmit from './Exercises/DisableSubmit/index.js';
function App() {
  return (
    <div className="App">
      <br />
      <h1>Exercises</h1>
      <hr />
      <TwitterCounter />
      <hr />
      <PasswordChecker />
      <hr />
      <AlphanumericPassword />
      <hr />
      <DisableSubmit />
      <hr />
    </div>
  );
}

export default App;
