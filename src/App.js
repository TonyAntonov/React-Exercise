import React from 'react';
import Threshold from './threshold.js';
import Rotate from './rotate.js';
import './App.scss';
//import Button from 'react-bootstrap/Button';
//import Dropdown from 'react-bootstrap/Dropdown'
//import DropdownButton from 'react-bootstrap/DropdownButton'
//const bootstrap = require('bootstrap');
class App extends React.Component {
	
	render(){
		return(
       <main>
         <section>
           <div className="row">
             <Threshold />
             <Rotate />
             </div>  
         </section>
       </main>
    )
	}
}

export default App;
