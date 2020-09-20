import React, { Component } from "react"
import NewEmployee from "./newEmployee"
import Table from "./table"
import Employee from "./employee"
class employeeRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    newEmployee = {}
    nameChangeHandler(event) {
        const { name, value } = event.target;
        this.newEmployee[name] = value;
    }
    addEmployeeHandler(event) {

        event.preventDefault();
        const tempEmployees = [...this.state.employees];
        tempEmployees.push(this.newEmployee);
        this.setState({
            employees: tempEmployees
        });
        this.newEmployee = {};
    }
    deleteEmployeeHandler(index) {
        const tempEmployees = [...this.state.employees];        
        tempEmployees.splice(index, 1);
        this.setState({
            employees: tempEmployees
        });
    }
    render() {
        let employeeList = this.state.employees.map(
            (employee, index) => {
            return (
                <Employee employee={employee} clicked={index => {this.deleteEmployeeHandler(index)}} />                
            );
        });
        return (
            <div>
                <Table employeeList={employeeList} />              
                <NewEmployee addEmployee={(event) => this.nameChangeHandler(event)} clicked={(event) => this.addEmployeeHandler(event)} />                
            </div>
        );
    }
}
export default employeeRender