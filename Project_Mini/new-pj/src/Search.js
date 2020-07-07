import React, { Component } from 'react';

class Search extends Component {

    DisplayButton = () => {
        if(this.props.DisplayForm===true){
            return <div  className="btn btn-block btn-outline-secondary mt-3" onClick={() => this.props.Connect() }> Close </div>
        }
        else{
         return   < div  className="btn btn-block btn-outline-info mt-3" onClick={() => this.props.Connect() }>Add +</div>
        }
    }

    render() {
        return (
            <div className="row">
                <div className="form-group mt-5">
                    <div className="btn-group">
                        <input type="text" className="form-control"  placeholder="Input..." />
                        <button type="submit" className="btn btn-primary mb-2" >Search</button>
                    </div>
                    
                   {this.DisplayButton()}
                    <div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;