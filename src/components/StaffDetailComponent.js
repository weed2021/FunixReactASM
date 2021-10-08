import React from "react";
import {Table , Card ,  CardHeader,  CardBody} from "reactstrap";
import dateFormat from "dateformat";

function RenderStaff({staff,DEPARTMENTS}){
    if(staff == null){
        return(<div></div>);
    }
    return(
        <div className="col-md 12 px-0"  >
                    <Card>
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
    );
}

const StaffDetail = (pros) => {
    return(
        <div className="row alert-info" >
            <RenderStaff staff={pros.staff} DEPARTMENTS={pros.departments} />
            
        </div>
    );
}

export default StaffDetail;