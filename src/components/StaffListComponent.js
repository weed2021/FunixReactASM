import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader } from "reactstrap";

function RenderStaffList({ staffs }) {
    const _staffs = staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
                <Link to={`/staff/${staff.id}`}>
                    <Card size='lg'>
                        <CardImg top width="100%" src={staff.image} alt={staff.name} />
                        <CardHeader className='text-center bg-info'>{staff.name}</CardHeader>
                    </Card>
                </Link>
            </div>
        );
    })
    return (
        <div style={{ padding: '3vw' }}>
            <div className="row pt-5" >
                <div className='col-12'>
                    <h3 className='text-center font-weight-bold'>DANH SÁCH NHÂN VIÊN</h3>
                    <hr />
                </div>
            </div>

            <div className="row pt-4" >
                {_staffs}
            </div>
        </div>
    );
}

const StaffList = (props) => {

    return (
        <RenderStaffList staffs={props.staffs} />
    );

};

export default StaffList;