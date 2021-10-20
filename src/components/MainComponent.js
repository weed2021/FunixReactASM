import React, { Component } from 'react';

import StaffList from './StaffListComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import DepartmentList from './DepartmentListComponent';
import DepartmentDetail from './DepartmentDetail';
import StaffDetail from "./StaffDetailComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postStaff, fetchStaffs, fetchDepartments, fetchStaffsSalary } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary
  }
}

const mapDispatchToProps = dispatch => ({
  postStaff: (staff) => dispatch(postStaff(staff)),
  fetchStaffs: () => { dispatch(fetchStaffs()) },
  fetchDepartments: () => { dispatch(fetchDepartments()) },
  fetchStaffsSalary: () => { dispatch(fetchStaffsSalary()) }
})

class Main extends Component {

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchStaffsSalary();
  }

  render() {
    const StaffWithId = ({ match }) => {
      console.log(match.params.staffId)
      return (
        <StaffDetail
          staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
          departments={this.props.departments.departments}
        />

      );
    }

    const DepartmentWithId = ({ match }) => {
      console.log(match.params.departmentId)
      return (
        <DepartmentDetail
          staffs={this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.departmentId)}
          department={this.props.departments.departments.find((department) => department.id === match.params.departmentId)}
        />
      );
    }

    return (
      <div>

        <Header />
        <Switch>
          <Route exact path='/staff' component={() => <StaffList postStaff={this.props.postStaff} />} />
          <Route path='/salary' component={() => <Salary staffsSalary={this.props.staffsSalary.staffsSalary} />} />
          <Route path='/staff/:staffId' component={StaffWithId} />
          <Route exact path='/department' component={() => <DepartmentList departments={this.props.departments.departments} />} />
          <Route path='/department/:departmentId' component={DepartmentWithId} />
          <Redirect to='/staff' />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
