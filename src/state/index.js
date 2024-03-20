


// import React, { Component } from "react";
// import Table from 'react-bootstrap/Table';

// class Employees extends Component {
//     constructor() {
//         super();
//         this.state = {
//             employees: [
//                 {
//                     id: 1,
//                     title: "employee1",
//                     teaching: "Azure",
//                 },
//                 {
//                     id: 2,
//                     title: "employee2",
//                     teaching: "react",
//                 },
//                 {
//                     id: 3,
//                     title: "employee3",
//                     teaching: "js dev",
//                 },
//                 {
//                     id: 4,
//                     title: "employee4",
//                     teaching: "dev",
//                 },
//             ],
//             selectedEmployee: null,
//         };
//     }

//     handleEmployeeClick = (id) => {
//         const selectedEmployee = this.state.employees.find(
//             (employee) => employee.id === id
//         );
//         this.setState({ selectedEmployee });
//     };

//     employeeall = () => {
//         this.setState({ selectedEmployee: this.state.employees });
//     }
    
//     render() {
//         return (
//             <>
//                 <button onClick={() => this.handleEmployeeClick(1)}>Employee 1</button>
//                 <button onClick={() => this.handleEmployeeClick(2)}>Employee 2</button>
//                 <button onClick={() => this.handleEmployeeClick(3)}>Employee 3</button>
//                 <button onClick={() => this.handleEmployeeClick(4)}>Employee 4</button>
//                 <button onClick={this.employeeall}>All Employees</button>
                
//                 {this.state.selectedEmployee && (
//                     <div>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Title</th>
//                                     <th>Teaching</th>
//                                     <th>ID</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {Array.isArray(this.state.selectedEmployee) ? 
//                                     this.state.selectedEmployee.map(employee => (
//                                         <tr key={employee.id}>
//                                             <td>{employee.title}</td>
//                                             <td>{employee.teaching}</td>
//                                             <td>{employee.id}</td>
//                                         </tr>
//                                     )) :
//                                     <tr key={this.state.selectedEmployee.id}>
//                                         <td>{this.state.selectedEmployee.title}</td>
//                                         <td>{this.state.selectedEmployee.teaching}</td>
//                                         <td>{this.state.selectedEmployee.id}</td>
//                                     </tr>
//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </>
//         );
//     }
// }

// export default Employees;   