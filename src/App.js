import React,{Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import StaffList from './components/StaffListComponent';
import {STAFFS,DEPARTMENTS} from './shared/staffs'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter} from 'react-router-dom';

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
      <div>
        <BrowserRouter>
          <Header />
          <StaffList departments={this.state.departments} staffs={this.state.staffs} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
