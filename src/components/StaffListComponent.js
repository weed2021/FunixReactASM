import React,{Component} from "react";
import {Button} from "reactstrap";
class StaffList extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        const staffs = this.props.staffs.map((staff)=>{
            if (staff.id<=5){
                return(
                    <div key={staff.id} className="col-12 col-md-6 p-4">
                        <Button className="btn-block" color="info">{staff.name}</Button>
                    </div>
                );
            }else{
                return(
                    <div></div>
                );
            }
            
        })
        return(
            <div className = "container">
                <div className="row">
                {staffs}
                </div>
                
            </div>
            
        );
    }
}
// class StaffList extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello Word</h1>
//             </div>
//         );
//     }
// }

export default StaffList;