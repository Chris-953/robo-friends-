import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox'
import {robots} from '../robots.js';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
	        searchfield:''
        } 
		
	}
	componentDidMount() {
		this.setState({robots: robots});
	}

	onSearchChange =(event) => {
		this.setState({searchfield: event.target.value})
		 		
	}
	render() {
		const{ robots, searchfield } = this.state;
	    const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	return(
	 <div className='tc'>
	  <h1 className='f1'>RoboFriends</h1>
	  <SearchBox searchChange={this.onSearchChange}/>
       <Cardlist robots ={filteredRobots}/>
       
     </div>

   );
  }
 }
export default App;