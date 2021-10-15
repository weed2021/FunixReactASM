import React,{Component} from 'react';

import StaffList from './StaffListComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import DepartmentList from './DepartmentListComponent';
import StaffDetail from "./StaffDetailComponent";
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs : state.staffs,
    departments: state.departments
  }
}

class Main extends Component{
  // constructor(props){
  //   super(props);

  // }

  

  render(){
    const StaffWithId = ({match})=>{
      return (
        <StaffDetail 
          staff={this.props.staffs.filter((staff)=>staff.id===parseInt(match.params.staffId,10))[0]} 
          departments={this.props.departments}
        />
  
      );
    }
    return (
      <div>
        
          <Header />
          <Switch> 
            <Route exact path='/staff' component={()=> <StaffList departments={this.props.departments} staffs={this.props.staffs} />} />
            <Route path='/salary' component={()=> <Salary staffs = {this.props.staffs} />} />
            <Route path='/staff/:staffId' component={StaffWithId} />
            <Route path='/department' component={()=> <DepartmentList departments={this.props.departments}  />} />
            <Redirect to='/staff' />
          </Switch>
          <Footer /> 
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
