import React from "react";
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

function RenderDeparment({departments}){
    const _departments = departments.map((department)=>{
        return(
            <div key={department.id} className="col-12 col-sm-6 col-lg-4 p-4">
                <Card>
                    <CardHeader>{department.name}</CardHeader>
                    <CardBody>
                        <Table borderless hover>
                            <tbody>
                                <tr>
                                    <th scope="row">Số lượng nhân viên</th>
                                    <td>{department.numberOfStaff}</td>
                                </tr> 
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        );
    })
    
    return (
        <div className="row " style={{padding:'2vw'}}>
            {_departments}
        </div>
    );
}

const DepartmentList =(pros)=>{
    return(
        <RenderDeparment departments={pros.departments} />
    );
}

export default DepartmentList;