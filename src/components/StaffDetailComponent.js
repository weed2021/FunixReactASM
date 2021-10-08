import React from "react";
import {Table , Card ,  CardHeader,  CardBody, CardImg} from "reactstrap";
import dateFormat from "dateformat";

function RenderStaff({staff,DEPARTMENTS}){
    if(staff == null){
        return(<div></div>);
    }
    return(
        <React.Fragment>
            <div className='col-12 col-sm-4 col-md-3'>
                <Card className="d-flex">
                    <CardImg className='img-fluid' top width="100%" src={staff.image} alt={staff.name} />
                </Card>
            </div>
            <div className="col-12 col-sm-8 col-md-9"  >
                        <Card className="d-flex">
                            <CardHeader className="text-white bg-info" tag="h5">{staff.name}</CardHeader>
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
            
        </React.Fragment>
    );
}

const StaffDetail = (pros) => {
    return(
        <div className='alert-info pt-4' style={{padding:'2vw'}}>
            <div className="row " >
                <RenderStaff staff={pros.staff} DEPARTMENTS={pros.departments} />
            </div>
        </div>
        
    );
}

export default StaffDetail;