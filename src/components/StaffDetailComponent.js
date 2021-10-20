import React from "react";
import { Table, Card, CardHeader, CardBody, CardImg, Breadcrumb, BreadcrumbItem, CardFooter, Button } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function RenderStaff({ staff, department, deleteStaff,history }) {
    if (staff == null) {
        return (<div></div>);
    }

    const handleDelete = (staff) => {
        deleteStaff(staff.id)
        history.push('/')
    }
    return (
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
                                    <td>{department.name}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Ngày sinh</th>
                                    <td>{dateFormat(staff.doB, "paddedShortDate")}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Ngày vào công ty</th>
                                    <td>{dateFormat(staff.startDate, "paddedShortDate")}</td>

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
                    <CardFooter>

                        <div className='row'>
                            <div className='col-0 col-md-6'>

                            </div>
                            <div className='col-6 col-md-3 ml-auto'>
                                <Button color='info' size="lg" block>Sửa</Button>
                            </div>
                            <div className='col-6 col-md-3 ml-auto'>
                                <Button onClick={() => handleDelete(staff)} color='danger' size="lg" block>Xóa</Button>
                            </div>
                        </div>

                    </CardFooter>
                </Card>
            </div>

        </React.Fragment>
    );
}

const StaffDetail = (props) => {
    let history = useHistory();
        
    return (
        <div style={{ padding: '2vw' }}>
            <div className="row " >
                <Breadcrumb className='col-md-12'>
                    <BreadcrumbItem><Link to='/'><b>Nhân viên</b></Link></BreadcrumbItem>
                    <BreadcrumbItem active><b>{props.staff.name}</b></BreadcrumbItem>
                </Breadcrumb>
                <RenderStaff history={history} deleteStaff = {props.deleteStaff} staff={props.staff} department={props.departments.find((department) => department.id === props.staff.departmentId)} />
            </div>
        </div>

    );
}

export default StaffDetail;