import React from 'react'

export default function table(props) {
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>                    
                </tr>
            </thead>
            <tbody>
                 {props.employeeList}
            </tbody>
        </table>
        </div>
    )
}
