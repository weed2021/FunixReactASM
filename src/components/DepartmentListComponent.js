import React from "react";
import { Card, CardHeader, CardBody, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

function RenderDeparment({ departments }) {
    const _departments = departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-sm-6 col-lg-4 p-4">
                <Link to={`/department/${department.id}`}>
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
                </Link>
            </div>
        );
    })

    return (
        <div className="row " style={{ padding: '2vw' }}>

            <Breadcrumb className='col-md-12'>
                <BreadcrumbItem><Link to='/'><b>Nhân viên</b></Link></BreadcrumbItem>
                <BreadcrumbItem active><b>Phòng ban</b></BreadcrumbItem>
            </Breadcrumb>

            {_departments}

        </div>
    );
}

const DepartmentList = (pros) => {
    return (
        <RenderDeparment departments={pros.departments} />
    );
}

export default DepartmentList;