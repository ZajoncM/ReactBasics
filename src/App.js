import React, { useState } from 'react';

// class App extends Component {
//
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {idleNumber: 0};
//     // }
//
//     state = { idleNumber: 0, name: 'milosz' }
//
//     handleClick = () => {
//         this.setState({idleNumber: this.state.idleNumber + 1});
//
//         console.log(this.state.idleNumber)
//     }
//
//     render() {
//         return  <div className="App">
//             <h1>Idle Clicker</h1>
//             <p>{this.state.idleNumber}</p>
//             <button onClick={this.handleClick}>Increment</button>
//             {console.log(this.state)}
//         </div>;
//     }
//
// }



const App = () => {
    const [idleNumber, setIdleNumber] = useState(0);

  return (
      <div className="App">
         <h1>Idle Clicker</h1>
         <p>{idleNumber}</p>
         <button onClick={() => setIdleNumber(idleNumber + 1)}>Increment</button>
      </div>
  );
}

export default App;
