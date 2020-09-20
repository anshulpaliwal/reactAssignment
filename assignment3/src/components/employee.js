import React from 'react'

export default function employee(props) {
    return (
        <div>
            <tr>
                <td>{props.employee.name}</td>
                <td>{props.employee.job}</td>
                <td>
                    <button onClick={props.clicked}>Delete</button>
                </td>
            </tr>
        </div>
    )
}
