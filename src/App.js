import React,{Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import StaffList from './components/StaffListComponent';
import {STAFFS,DEPARTMENTS} from './shared/staffs'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      staffs:STAFFS,
      departments:DEPARTMENTS
    };
  }
  render(){
    return (
      <div >
        <Navbar dark color="secondary" >
          <div className="container">
              <NavbarBrand>HR Managerment App</NavbarBrand>
          </div>
        </Navbar>
        <StaffList departments={this.state.departments} staffs={this.state.staffs} />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <StaffList />
//     </div>
//   );
// }

export default App;
