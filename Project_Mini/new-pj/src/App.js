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
      data : DataUser,
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

  GetUserData = (name, username, email) =>{
       
      var item = {};
      item.id = "";
      item.name = name;
      item.username = username;
      item.email = email;
      var items = this.state.data;
      items.push(item);
      this.setState({
        data: items
      });
      console.log(items);

   
  }

  render() {
    return (
        <div className="container">
        <Search Connect = {() => this.ChangeStatus() } DisplayForm = {this.state.DisplayForm} />
       
        <div className="row">
        <Table dataUserProps= {this.state.data} dataUpdate= {this.state.persons}/>
        
        <AddData add= {(name, username, email) => this.GetUserData(name, username, email) } DisplayForm = {this.state.DisplayForm} />
        </div>
      
      
        </div>
     
    );
  }
}

export default App;
