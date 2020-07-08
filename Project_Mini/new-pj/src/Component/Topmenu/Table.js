import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Table extends Component {
    // mappingDataUser  = () => 
    //     this.props.dataUserProps.map((value,key) => (
    //       <TableDataRow userName={value.name} key={key} stt = {key}  tell={value.Tele} permission={value.Permission} />
    //     ) )
    
    // mappinguserdata = () => this.props.dataUserProps.map((value,key) => (
    // <TableDataRow userName = {value.name} surName = {value.surname} Year={value.birthYear} place={value.birthPlace} stt= {key}/>
    // ) )

     mappingUserUpdate = () => this.props.dataUpdate.map((value,key) => (
        <TableDataRow userName = {value.name} surName = {value.username} Year={value.email} place={value.name} stt= {key}/>
        ) )
    

    render() {
        return (
          <div className="col-8">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">SurName</th>
                    <th scope="col">Birth Year</th>
                    <th scope="col">Birth Place</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
              {this.mappingUserUpdate()} 
                
               
                </tbody>
            </table>
        </div>


            
        );
    }
}

export default Table;