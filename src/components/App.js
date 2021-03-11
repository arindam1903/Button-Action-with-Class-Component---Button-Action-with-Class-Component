import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={display:false};
	};
handleClick(){
 this.setState({display:true});
 
}

    render() {
    	return(
    		<div id="main">
				<button id='click' onClick={this.handleClick()} >Click</button>
{this.state.display===true?<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:''}
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

