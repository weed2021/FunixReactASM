import React,{Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import StaffList from './components/StaffListComponent';
import {STAFFS} from './shared/staffs'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      staffs:STAFFS
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
        <StaffList staffs={this.state.staffs} />
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
