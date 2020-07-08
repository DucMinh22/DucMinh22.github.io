import React, { Component } from 'react';

class AddData extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            id : "",
            name : "",
            username :"",
            email: ""
        }
    }
    

    CheckStatus  = () => {
        if(this.props.DisplayForm === true){
        return (
            <div className="card">
                <div className="form-group">
                <input type="text" name="name" onChange = {(event) => this.isChange(event)}  className="form-control y-3"  placeholder="UserName" />
                </div>
                <div className="form-group">
                <input type="text" name="username" onChange = {(event) => this.isChange(event)} className="form-control y-3" placeholder="SurName" />
                </div>
                <div className="form-group">
                <input type="text" name="email" onChange = {(event) => this.isChange(event)} className="form-control y-3" placeholder="BirthYear" />
                </div>
                <div>
                <select className="custom-select" onChange = {(event) => this.isChange(event)} name="name" id="" required>
                    <option  disabled value>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
                <button type="submit" onClick={(name, username, email) => this.props.add(this.state.name, this.state.username, this.state.email )}  className="btn btn-primary mt-3">Submit</button>
            </div>
        )
        }
    }

   

    isChange  = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          [name] : value
      });
    

    }

    render() {
        return (
           <div className="col-4">
            <div>
                
                {this.CheckStatus() }
                
            </div>
    
            {/* <div className="card">
                <div className="form-group">
                <input type="text" name="name" onChange = {(event) => this.isChange(event)}  className="form-control y-3"  placeholder="UserName" />
                </div>
                <div className="form-group">
                <input type="text" name="tel" onChange = {(event) => this.isChange(event)} className="form-control y-3" placeholder="SurName" />
                </div>
                <div>
                <select className="custom-select" onChange = {(event) => this.isChange(event)} name="Permission" id="" required>
                    <option  disabled value>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div> */}
            </div>

        );
    }
}

export default AddData;