import React, { Component } from 'react';

import StaffList from './StaffListComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import DepartmentList from './DepartmentListComponent';
import StaffDetail from "./StaffDetailComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff, fetchStaffs, fetchDepartments } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}

const mapDispatchToProps = dispatch => ({
  addStaff: (staff) => dispatch(addStaff(staff)),
  fetchStaffs:() => {dispatch(fetchStaffs())},
  fetchDepartments: () => {dispatch(fetchDepartments())}
})

class Main extends Component {

  componentDidMount(){
    this.props.fetchStaffs();
    this.props.fetchDepartments()
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
          departments={this.props.departments}
        />

      );
    }
    return (
      <div>

        <Header />
        <Switch>
          <Route exact path='/staff' component={() => <StaffList addStaff={this.props.addStaff}/>}  />
          <Route path='/salary' component={() => <Salary staffs={this.props.staffs.staffs} />} />
          <Route path='/staff/:staffId' component={StaffWithId} />
          <Route path='/department' component={() => <DepartmentList departments={this.props.departments.departments} />} />
          <Redirect to='/staff' />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
