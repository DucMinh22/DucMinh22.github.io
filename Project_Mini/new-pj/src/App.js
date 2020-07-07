import React,{Component} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';

// import DieuhuongURL from './router/DieuhuongURL';
import Table from './Component/Topmenu/Table';
import DataUser from './Component/Topmenu/TableData.json';
import axios from 'axios';
import Search from './Search';
import AddData from './Component/Topmenu/AddData';




class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      DisplayForm : true,
      persons: []
    }
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => console.log(error));
  }


  ChangeStatus  = () => {
   this.setState({DisplayForm: ! this.state.DisplayForm});          
}

  render() {
    return (
        <div className="container">
        <Search Connect = {() => this.ChangeStatus() } DisplayForm = {this.state.DisplayForm} />
        <ul>
            { this.state.persons.map(person => <li> {person.id}, {person.name}, {person.username }</li>)}
          </ul>
        <div className="row">
        <Table/>
        
        <AddData DisplayForm = {this.state.DisplayForm} />
        </div>
      
      
        </div>
     
    );
  }
}

export default App;
