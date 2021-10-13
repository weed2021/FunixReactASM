import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader, Input, Button, Form, FormGroup, Col, Modal, ModalHeader, ModalBody, Label, Row } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from "react-datepicker";


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

    const handleSearch = (event) => {

        setSearchInput(search.current.value)
        event.preventDefault()
        search.current.value = ""

    }

    let search = React.createRef();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    

    const [startDate, setStartDate] = useState(new Date());
    const _DatePicker = () => {
        return (
        <ReactDatePicker 
            className='form-control' 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            dateFormat="dd/MM/yyyy"
            
        />
      );
    }
    
    const handleSubmit = (values,startDate)=>{
        console.log(startDate)
        alert(JSON.stringify(values))
    }

    return (
        <div style={{ padding: '3vw' }}>
            <div className='row pt-3'>
                <div className="col-12 col-md-6 col-lg-4 mr-auto">
                    <Button outline onClick={toggle} ><span className="fa fa-address-card-o fa-lg"></span>{' '}Thêm nhân viên</Button>
                </div>

                <div className='col-12 col-md-6 col-lg-4 ml-auto p-3' >
                    <Form onSubmit={handleSearch}>
                        <FormGroup row>
                            <Col>
                                <Input md={10}
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

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Thêm nhân viên mới</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => handleSubmit(values,startDate)}>
                            <Row className='form-group'>
                                <Label htmlFor="name" md={2}>Họ tên</Label>
                                <Col md={10}>
                                    <Control.text model=".name" className='form-control'
                                        placeholder='Nhập tên nhân viên'
                                        name='name' id='name'
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                                <Col md={10}>
                                    <Control model=".doB"
                                        placeholder='dd/mm/yyyy'
                                        name='doB' id='doB'
                                        className='form-control'
                                        component={_DatePicker}
                                    />


                                </Col>
                            </Row>

                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>

                </Modal>
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