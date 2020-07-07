import React, { Component } from 'react';

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td></td>
                <td>Otto</td>
                <td>05/4/1997</td>
                <td>HaNoi</td>
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