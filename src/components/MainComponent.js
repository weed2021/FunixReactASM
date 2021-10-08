import React,{Component} from 'react';

import StaffList from './StaffListComponent';
import {STAFFS,DEPARTMENTS} from '../shared/staffs'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import DepartmentList from './DepartmentListComponent';
import { BrowserRouter} from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      staffs:STAFFS,
      departments:DEPARTMENTS
    };
  }
  render(){
    return (
      <div>
        <DepartmentList departments={this.state.departments} />
        <BrowserRouter>
          <Header />
          <StaffList departments={this.state.departments} staffs={this.state.staffs} />
          <Footer />
        </BrowserRouter>
        <Salary staffs = {this.state.staffs}/>
      </div>
    );
  }
}

export default Main;
