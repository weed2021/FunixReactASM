import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader,Input } from "reactstrap";

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

            <div className="row pt-4" >
                {_staffs}
            </div>
    );
}

const StaffList = (props) => {
    const [searchInput,setSearchInput] = useState("")
    const newStaffs = props.staffs.filter((staff)=>{

        if(searchInput===''){
            return staff;
        }else if(staff.name.toLowerCase().includes(searchInput.toLowerCase())){
            return staff;
        }else{
            return null
        }


    })
    console.log(searchInput)
    return (
        <div style={{ padding: '3vw' }}>
            <div className='row pt-3'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 bg-info p-1 ml-auto' >
                    <Input onChange={(event) => setSearchInput(event.target.value)} className='input-lg' placeholder="Tìm kiếm nhân viên"  type='text' />
                </div>
            </div>
            
            <div className="row pt-5" >
                <div className='col-12'>
                    <h3 className='text-center font-weight-bold'>DANH SÁCH NHÂN VIÊN</h3>
                    <hr />
                </div>
            </div>
            
            <RenderStaffList staffs={newStaffs} />
        </div>
        
    );

};

export default StaffList;