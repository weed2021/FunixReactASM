import React from "react";
import { Card, CardHeader, CardFooter, CardBody, Table } from 'reactstrap';

function RenderSalaryTable({staffs}){

    const employees = staffs.map((staff)=>{
        
        const salary= parseInt((staff.salaryScale * 3000000) + (staff.overTime * 200000));

        return (
            <div key={staff.id} className="col-2 col-md-2 col-lg-4 p-4">
                <Card>
                    <CardHeader>{staff.name}</CardHeader>
                    <CardBody>
                        <Table borderless hover>
                            <tbody>
                                <tr>
                                    <th scope="row">Mã nhân viên</th>
                                    <td>{staff.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hệ số lương</th>
                                    <td>{staff.salaryScale}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Giờ làm thêm</th>
                                    <td>{staff.overTime}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">Lương</th>
                                    <td>
                                        <i class="fa fa-money" aria-hidden="true"></i> {salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {<sup>đ</sup>}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardFooter>
                </Card>
            </div>
        );
    })
    return (
        <div className="row">
            {employees}
        </div>
    );
}

const Salary =(pros) => {
    return(
        <div className= "container">
            
                <RenderSalaryTable staffs={pros.staffs} />
            
        </div>
        
    );
}

export default Salary;