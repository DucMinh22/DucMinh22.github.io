import React, { Component } from 'react';

class AddData extends Component {

    CheckStatus  = () => {
        if(this.props.DisplayForm === true){
        return (
            <div className="card">
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
            </div>
        )
        }
    }

   

    isChange  = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name);
      console.log(value);
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