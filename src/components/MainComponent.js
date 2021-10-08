import React,{Component} from 'react';

import StaffList from './StaffListComponent';
import {STAFFS,DEPARTMENTS} from '../shared/staffs'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import DepartmentList from './DepartmentListComponent';
import { BrowserRouter, Switch,Route,Redirect} from 'react-router-dom';

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
        {/* <DepartmentList departments={this.state.departments} /> */}
        
        <BrowserRouter>
          <Header />
          <Switch> 
            <Route path='/staff' component={()=> <StaffList departments={this.state.departments} staffs={this.state.staffs} />} />
            <Route path='/salary' component={()=> <Salary staffs = {this.state.staffs} />} />
            <Route path='/department' component={()=> <DepartmentList departments={this.state.departments}  />} />
            <Redirect to='/staff' />
          </Switch>
          {/* <StaffList departments={this.state.departments} staffs={this.state.staffs} /> */}
          <Footer />
        </BrowserRouter>
        {/* <Salary staffs = {this.state.staffs}/> */}
      </div>
    );
  }
}

export default Main;
