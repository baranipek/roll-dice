import React, {Component} from 'react';
import './css/App.css';
import RollDie from "./component/RollDie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDie />
        </div>
    );
  }
}

export default App;
