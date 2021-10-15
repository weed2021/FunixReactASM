
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader, Input, Button, Form, FormGroup, Col, Modal, ModalHeader, ModalBody, Label, Row } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import 'react-datepicker/dist/react-datepicker.css';
// import dateFormat from "dateformat";
import { connect } from "react-redux";


// Handle Error
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validBirthDay = (val) => new Date(val).getTime() < new Date().getTime();
const validStartDate = (val) => new Date(val).getTime() < new Date().getTime();
const validPositive = (val) => (val >= 0) && !isNaN(val);

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

    //Search input hook
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


    const handleSubmit = (values) => {
        // alert(values.department)
        props.addStaff(values)

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
                        <LocalForm onSubmit={(values) => handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor="name" md={2}>Họ tên</Label>
                                <Col md={10}>
                                    <Control.text model=".name" className='form-control'
                                        placeholder='Nhập tên nhân viên'
                                        name='name' id='name'
                                        validators={{
                                            required,
                                            maxLength: maxLength(30),
                                            minLength: minLength(3)
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.name'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        maxLength: 'Tối đa 30 ký tự',
                                        minLength: 'Tối thiểu 3 ký tự',
                                    }}

                                />
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                                <Col md={10}>
                                    <Control.text type='date' model=".doB"
                                        placeholder='dd/mm/yyyy'
                                        name='doB' id='doB'
                                        className='form-control'
                                        validators={{
                                            required,
                                            validBirthDay
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.doB'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validBirthDay: 'Chưa đủ tuổi!'
                                    }}

                                />
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                                <Col md={10}>
                                    <Control.text type='date' model=".startDate"
                                        placeholder='dd/mm/yyyy'
                                        name='startDate' id='startDate'
                                        className='form-control'
                                        validators={{
                                            required,
                                            validStartDate
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.startDate'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validStartDate: 'Ngày gia nhập không hợp lệ!'
                                    }}

                                />
                            </Row>


                            <Row className='form-group'>
                                <Label md={2} htmlFor='department'>Phòng ban</Label>
                                <Col md={10}>
                                    <Control.select model='.department' defaultValue='sale' className='form-control' validators={{ required }}>
                                        <option value='sale'>Sale</option>
                                        <option value='hr'>HR</option>
                                        <option value='marketing'>Marketing</option>
                                        <option value='it'>IT</option>
                                        <option value='finance'>Finance</option>
                                    </Control.select>

                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.department'
                                    show='touched'
                                    messages={{
                                        required: 'Chưa chọn phòng ban!',

                                    }}

                                />
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                                <Col md={10}>
                                    <Control.text model=".salaryScale"
                                        name='salaryScale' id='salaryScale'
                                        className='form-control'
                                        defaultValue='1'
                                        validators={{
                                            required,
                                            validPositive
                                        }}

                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.salaryScale'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validPositive: 'Hệ số lương không hợp lệ!'
                                    }}

                                />
                            </Row>


                            <Row className='form-group'>
                                <Label htmlFor="annualLeave" md={2}>Ngày nghỉ còn lại</Label>
                                <Col md={10}>
                                    <Control.text model=".annualLeave"
                                        className='form-control'
                                        name='annualLeave' id='annualLeave'
                                        defaultValue='0'
                                        validators={{
                                            required,
                                            validPositive
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.annualLeave'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validPositive: 'Hệ số lương không hợp lệ!'
                                    }}

                                />
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor="overTime" md={2}>Ngày làm thêm giờ</Label>
                                <Col md={10}>
                                    <Control.text model=".overTime"
                                        className='form-control'
                                        name='overTime' id='overTime'
                                        defaultValue='0'
                                        validators={{
                                            required,
                                            validPositive
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.overTime'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validPositive: 'Giá trị không hợp lệ!'
                                    }}
                                />
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

const mapStateToProps = state =>{
    return {
        staffs: state.staffs,
        departments: state.departments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addStaff: (values) => {
            dispatch({ type: 'ADD_NEWSTAFF',
            values})
            // const action = {
            //     type: 'ADD_NEWSTAFF',
            //     values
            // }
            // dispatch(action)
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StaffList);