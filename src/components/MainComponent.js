import React,{Component} from 'react';

import StaffList from './StaffListComponent';
import {STAFFS,DEPARTMENTS} from '../shared/staffs'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import DepartmentList from './DepartmentListComponent';
import StaffDetail from "./StaffDetailComponent";
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
    const StaffWithId = ({match})=>{
      return (
        <StaffDetail 
          staff={this.state.staffs.filter((staff)=>staff.id===parseInt(match.params.staffId,10))[0]} 
          departments={this.state.departments}
        />
  
      );
    }
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch> 
            <Route exact path='/staff' component={()=> <StaffList departments={this.state.departments} staffs={this.state.staffs} />} />
            <Route path='/salary' component={()=> <Salary staffs = {this.state.staffs} />} />
            <Route path='/staff/:staffId' component={StaffWithId} />
            <Route path='/department' component={()=> <DepartmentList departments={this.state.departments}  />} />
            <Redirect to='/staff' />
          </Switch>
          <Footer />
          
        </BrowserRouter>
        
      </div>
    );
  }
}

export default Main;
