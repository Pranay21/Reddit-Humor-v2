import React, { Component } from 'react';

import Display from '../Display/connectedDisplay';

class App extends Component {


 render() {
   return (
     <main className="App min-vh-100">
       <Display />
     </main>
   );
 }
}

export default App;