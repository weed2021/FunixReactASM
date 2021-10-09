import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

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
    // Dropdown hook của filter
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    // Search input hook
    const [searchInput, setSearchInput] = useState("")

    // Hook filter Department
    const [departmentValue, setDepartmentValue] = useState('')

    //Tạo array chứa các staff được lọc thông qua search
    const newStaffs = props.staffs.filter(function(staff) {

        if (searchInput === '')  {
            return staff;

        }
        else if (staff.name.toLowerCase().includes(searchInput.toLowerCase())) {
            
            return staff;
        } else {
            return null
        }
    })
    
    //Tạo array chứa các staff được lọc thông qua filter
    const staffWithDepartment = props.staffs.filter(function(staff) {

        if (staff.department.name.toLowerCase() === departmentValue)  {
            return staff;
        }
        else {
            return null
        }
    })
    
    

    

    return (
        <div style={{ padding: '3vw' }}>
            <div className='row pt-3'>
                {/* Dropdown element*/}
                <div className='col-12 col-sm-6 col-md-8 col-lg-9 p-1 ml-auto' >
                    <Dropdown className="ml-auto" isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color='info' caret>
                            Phòng ban
                        </DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem onClick={() => setDepartmentValue('sale')}>Sale</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => setDepartmentValue('hr')}>HR</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => setDepartmentValue('marketing')}>Marketing</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => setDepartmentValue('it')}>IT</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => setDepartmentValue('finance')}>Finance</DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
                </div>

                {/* Search element */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 bg-info p-1 ml-auto' >
                    <Input onFocus={()=> setDepartmentValue('')} onChange={(event) => setSearchInput(event.target.value)} className='input-lg' placeholder="Tìm kiếm nhân viên" type='text' />
                </div>
            </div>

            <div className="row pt-5" >
                <div className='col-12'>
                    <h3 className='text-center font-weight-bold'>DANH SÁCH NHÂN VIÊN</h3>
                    <hr />
                </div>
            </div>

            <RenderStaffList staffs={departmentValue===''?newStaffs:staffWithDepartment} />
        </div>

    );

};

export default StaffList;