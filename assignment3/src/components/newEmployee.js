import React from 'react'

export default function newEmployee(props) {
    
    return (
        <div>
            <h1>Add New Employee</h1>
            <form onSubmit={props.clicked}>
                 <div>
                    <label>Name</label>
                    <br />
                    <input type="text" name="name" onChange={props.addEmployee} />
                </div>
                <div>
                    <label>Job</label>
                    <br />
                    <input type="text" name="job" onChange={props.addEmployee} />
                </div>                
                <button type="submit" >Submit</button>        
            </form>
        </div>
    )
}
