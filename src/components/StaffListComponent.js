import React,{Component} from "react";
import {Card, Button, CardHeader, CardFooter, CardBody,
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
        // const DEPARTMENTS = DEPARTMENTS;
        if(staff!=null){
            return(
                <Card>
                    <CardHeader tag="h6">{staff.name}</CardHeader>
                    <CardBody>
                        <CardTitle >Phòng Ban:{' '}{staff.department.name}</CardTitle>
                        <CardText> Ngày sinh: {' '}
                            {dateFormat(staff.doB,"paddedShortDate")}
                        </CardText>
                        <CardText> Ngày vào công ty: {' '}
                            {dateFormat(staff.startDate,"paddedShortDate")}
                        </CardText>
                        <CardText> Ngày nghỉ còn lại: {' '}
                            {staff.annualLeave}
                        </CardText>
                        <CardText> Ngày làm thêm giờ: {' '}
                            {staff.overTime}
                        </CardText>

                    </CardBody>
                </Card>
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
                        <Button onClick={()=>this.onStaffSelect(staff)} className="btn-block" color="info">{staff.name}</Button>
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
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff,this.props.departments)}
                </div>
                
            </div>
            
        );
    }
}


export default StaffList;