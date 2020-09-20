import React from 'react'
import Employee from './employee'
import "./employee.css"

export default function employeeRender() {
    var employees= [
        
        {
            name: "Charlie",
            job: "Janitor"
        },
        {
            name: "Mac",
            job: "Bouncer"
        },
        {
            name: "Dee",
            job: "Aspiring actress"
        },
        {
            name: "Dennis",
            job: "Bartendorr"
        }
    ]
    var employeeList= employees.map(employee => <Employee employee={employee}></Employee>)
    return (
        <div>
           <tr>
               <th>name</th>
               <th>job</th>
           </tr>
           <tr>{employeeList}</tr> 
        </div>
    )
}
