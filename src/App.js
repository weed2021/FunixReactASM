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
        <Navbar dark color="info" >
          <div className="container">
              <NavbarBrand>HR Managerment App</NavbarBrand>
          </div>
        </Navbar>
        <StaffList departments={this.state.departments} staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
