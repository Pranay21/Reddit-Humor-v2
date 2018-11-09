import React, { Component } from 'react';
import Particles from "../../Particles"
import Display from '../Display/connectedDisplay';

class App extends Component {


 render() {
   return (
     <main className="App min-vh-100">
       <Display />
       <Particles/>
     </main>
   );
 }
}

export default App;