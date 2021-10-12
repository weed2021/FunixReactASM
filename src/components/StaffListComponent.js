import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader, Input, Button, Form, FormGroup, Col } from "reactstrap";

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


    // Search input hook
    const [searchInput, setSearchInput] = useState("")


    //Tạo array chứa các staff được lọc thông qua search
    const newStaffs = props.staffs.filter(function (staff) {

        if (searchInput === '') {
            return staff;
        }
        else if (staff.name.toLowerCase().includes(searchInput.toLowerCase())) {

            return staff;
        } else {
            return null
        }
    })

    const handleSearch = (event)=>{
        
        setSearchInput(search.current.value)
        event.preventDefault()
        search.current.value = ""
        
    }
    let search = React.createRef();
    return (
        <div style={{ padding: '3vw' }}>
            <div className='row pt-3'>
                
                <div className='col-12 col-md-6 col-lg-4 ml-auto' >
                    <Form onSubmit={handleSearch}>
                        <FormGroup row>
                            <Col>
                                <Input md={10}
                                    // onChange={(event) => setSearchInput(event.target.value)} 
                                    name="search" 
                                    id="search"
                                    className='input-lg'
                                    placeholder="Tìm kiếm nhân viên"
                                    type='text'
                                    innerRef={search}  
                                />
                            </Col>
                            <Button type="submit" md={2} color='primary'>Tìm kiếm</Button>
                        </FormGroup>
                    </Form>
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