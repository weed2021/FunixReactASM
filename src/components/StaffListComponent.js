import React,{Component} from "react";
import {Card, Button, CardHeader, Table, CardBody,
    CardTitle, CardText} from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedStaff: null
            
        }
    }

    onStaffSelect(staff){
        this.setState({selectedStaff:staff})
    }

    renderStaff(staff,DEPARTMENTS){
        if(staff!=null){
            return(
                <div className="col-md 12 px-0"  >
                    <Card>
                        <CardHeader className="text-white bg-info" tag="h6">{staff.name}</CardHeader>
                        <CardBody>
                            <Table borderless hover>
                                <tbody>
                                    <tr>
                                        <th scope="row">Phòng Ban</th>
                                        <td>{staff.department.name}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Ngày sinh</th>
                                        <td>{dateFormat(staff.doB,"paddedShortDate")}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Ngày vào công ty</th>
                                        <td>{dateFormat(staff.startDate,"paddedShortDate")}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Ngày nghỉ còn lại</th>
                                        <td>{staff.annualLeave}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Ngày làm thêm giờ</th>
                                        <td>{staff.overTime}</td>
                                        
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                    
                </div>   
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const staffs = this.props.staffs.map((staff)=>{
            if (staff.id<=5){
                return(
                    <div key={staff.id} className="col-sm-12 col-md-6 col-lg-4 p-4">
                        <Button size="lg" onClick={()=>this.onStaffSelect(staff)} className="btn-block" color="danger ">{staff.name}</Button>
                    </div>
                );
            }
            
        })
        return(
            <div className = "container">
                <div>
                    <br></br>
                </div>
                <div dark className="row alert alert-info" >
                    {staffs}

                </div>
                <div dark className="row">
                    <div class="alert alert-info col-md-12 p-4" role="alert">
                            Bấm vào tên nhân viên để xem chi tiết!
                    </div>
                </div>
                
                <div className="row alert-info" >
                    {this.renderStaff(this.state.selectedStaff,this.props.departments)}
                </div>
                
            </div>
            
        );
    }
}


export default StaffList;