import React, { Component } from 'react';

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.stt + 1}</th>
                <td>{this.props.userName}</td>
                <td>{this.props.surName}</td>
                <td>{this.props.Year}</td>
                <td>{this.props.place}</td>
                <td>
                <div className="btn-group text-center" role="group" aria-label="button group">
                    <button type="button" className=" mr-3 btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;