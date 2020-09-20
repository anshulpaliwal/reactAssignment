import React from 'react'
import "./employee.css"

export default function employee({employee}) {
    return (
        <div>
            <tr>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        </tr>
        </div>
    )
}
