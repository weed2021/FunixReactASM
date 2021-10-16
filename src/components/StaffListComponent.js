import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader, Input, Button, Form, FormGroup, Col, Modal, ModalHeader, ModalBody, Label, Row } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from "react-redux";


// Handle validate của modal form to create new staff
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const validDate = (val) => (new Date(val).getTime() < new Date().getTime()) && (parseInt(new Date(val).getFullYear())>1900);
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

    // Xử lý click search
    const handleSearch = (event) => {
        setSearchInput(search.current.value)
        event.preventDefault()
        search.current.value = ""

    }


    // Tạo biến search để lưu giá trị innerRef trong input search
    let search = React.createRef();


    // Hook xử lý đóng mở modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    // Xử lý khi submit form
    const handleSubmit = (values) => {

        // Xử lý dữ liệu khi user select department, _dpm lưu giá trị của department của staff mới
        let _dpm = '';
        switch (values.department) {
            case 'sale':
                _dpm = props.departments[0]
                break;
            case 'hr':
                _dpm = props.departments[1]
                break;
            case 'marketing':
                _dpm = props.departments[2]
                break;
            case 'it':
                _dpm = props.departments[3]
                break;
            case 'finance':
                _dpm = props.departments[4]
                break;

            default:
                break;
        }

        // Dựa vào values của form gửi tới để tạo ra object staff mới
        const newStaff = {
            id: props.staffs.length,
            name: values.name,
            doB: new Date(values.doB).toISOString(),
            salaryScale: values.salaryScale,
            startDate: new Date(values.startDate).toISOString(),
            department: _dpm,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: '/assets/images/alberto.png'

        };

        // Truyền staff mới vào dismatch để chạy action bên reducer
        props.addStaff(newStaff)

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

                <Modal isOpen={modal} toggle={toggle} className="modal-lg">
                    <ModalHeader toggle={toggle}>Thêm nhân viên mới</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor="name" md={3}>Họ tên</Label>
                                <Col md={9}>
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
                                <Label htmlFor="doB" md={3}>Ngày sinh</Label>
                                <Col md={9}>
                                    <Control.text type='date' model=".doB"
                                        placeholder='dd/mm/yyyy'
                                        name='doB' id='doB'
                                        className='form-control'
                                        validators={{
                                            required,
                                            validDate
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.doB'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validDate: 'Ngày sinh không hợp lệ'
                                    }}

                                />
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor="startDate" md={3}>Ngày vào công ty</Label>
                                <Col md={9}>
                                    <Control.text type='date' model=".startDate"
                                        placeholder='dd/mm/yyyy'
                                        name='startDate' id='startDate'
                                        className='form-control'
                                        validators={{
                                            required,
                                            validDate
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.startDate'
                                    show='touched'
                                    messages={{
                                        required: 'Không được bỏ trống!',
                                        validDate: 'Ngày gia nhập không hợp lệ!'
                                    }}

                                />
                            </Row>


                            <Row className='form-group'>
                                <Label md={3} htmlFor='department'>Phòng ban</Label>
                                <Col md={9}>
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
                                <Label htmlFor="salaryScale" md={3}>Hệ số lương</Label>
                                <Col md={9}>
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
                                <Label htmlFor="annualLeave" md={3}>Ngày nghỉ còn lại</Label>
                                <Col md={9}>
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
                                <Label htmlFor="overTime" md={3}>Ngày làm thêm giờ</Label>
                                <Col md={9}>
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
                                <Col md={{ size: 9, offset: 3 }}>
                                    <Button type="submit" color="info">
                                        Tạo mới
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


// Map state từ store vào component này
const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments
    }
}

// Map action ADD_NEWSTAFF từ store 
const mapDispatchToProps = (dispatch) => {
    return {

        addStaff: (newStaff) => {
            dispatch({
                type: 'ADD_NEWSTAFF',
                newStaff
            })
            // const action = {
            //     type: 'ADD_NEWSTAFF',
            //     values
            // }
            // dispatch(action)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);