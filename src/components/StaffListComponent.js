    import React,{Component} from "react";
    import {Dropdown,DropdownToggle,Table ,DropdownMenu,DropdownItem, Card, Button, CardHeader, CardImg, CardBody,
        CardTitle} from "reactstrap";
    import dateFormat from "dateformat";


    class StaffList extends Component{
        constructor(props){
            super(props);
            this.state = {
                selectedStaff: null,
                dropdownOpen: false,
                classColStaff :"col-sm-12 col-md-6 col-lg-4 p-4",
                size:"lg",
                
            }
            // This binding is necessary to make `this` work in the callback
            // this.handleClickDefault = this.handleClickDefault.bind(this);
            // this.handleClick2 = this.handleClick2.bind(this);
            // this.handleClick3 = this.handleClick3.bind(this);
            // this.handleClick4 = this.handleClick4.bind(this);
        }

        onStaffSelect(staff){
            this.setState({selectedStaff:staff})
        }

        renderStaff(staff,DEPARTMENTS){
            if(staff!=null){
                return(
                    <div className="col-md 12 px-0"  >
                        <Card>
                            <CardHeader className="text-white bg-info" tag="h5">{staff.name}</CardHeader>
                            <CardBody>
                                <Table borderless hover>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Phòng Ban</th>
                                            <td>{staff.department.name}</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Ngày sinh</th>
                                            <td>{dateFormat(staff.doB,"paddedShortDate")}</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Ngày vào công ty</th>
                                            <td>{dateFormat(staff.startDate,"paddedShortDate")}</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Ngày nghỉ còn lại</th>
                                            <td>{staff.annualLeave}</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Ngày làm thêm giờ</th>
                                            <td>{staff.overTime}</td>
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                        
                    </div>   
                );
            }else{
                return(
                    <div></div>
                );
            }
        }
        handleClickDefault(){
            this.setState({classColStaff :"col-12 col-md-6 col-lg-4 p-4", size:"lg"})
        }
        handleClick2(){
            this.setState({classColStaff :"col-6 col-sm-6 col-md-6 col-lg-6 p-4", size:"block"})
        }
        handleClick3(){
            this.setState({classColStaff :"col-4 col-sm-4 col-md-4 col-lg-4 p-2", size:"block"})
        }
        handleClick4(){
            this.setState({classColStaff :"col-3 col-sm-3 col-md-3 col-lg-3 p-1", size:"sm"})
        }

        render(){
            const staffs = this.props.staffs.map((staff)=>{
                
                    return(
                        <div  key={staff.id} className={this.state.classColStaff}>
                            <Card size={this.state.size}>
                            <CardImg top width="100%" src={staff.image} alt="Card image cap" />
                            <CardBody>
                               
                                <Button onClick={()=>this.onStaffSelect(staff)} className="btn-block">{staff.name}</Button>
                            </CardBody>
                            </Card>
                            {/* <div key={staff.id} className={this.state.classColStaff}>
                                <Button size={this.state.size} onClick={()=>this.onStaffSelect(staff)} className="btn-block" color="danger ">{staff.name}</Button>
                            </div> */}
                        </div>
                        
                    );
                }   
            )       

            const toggle = () => this.setState({dropdownOpen: !this.state.dropdownOpen});
            return(
                <div className = "container">
                    <div>
                        <br></br>
                    </div>
                    <div className="row">
                        <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={toggle}>
                            <DropdownToggle color="info" caret>
                                Chia cột
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem onClick={()=>this.handleClickDefault()}>Reset</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={()=>this.handleClick2()}>2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={()=>this.handleClick3()}>3</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={()=>this.handleClick4()}>4</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div>
                        <br></br>
                    </div>
                    <div className="row alert alert-info" >
                        {/* Render Staff button */}
                        

                            {staffs}
                        
                    </div>
                    <div className="row">
                        <div className="alert alert-info col-md-12 p-4" role="alert">
                                Bấm vào tên nhân viên để xem chi tiết!
                        </div>
                    </div>
                    
                    <div className="row alert-info" >
                        {this.renderStaff(this.state.selectedStaff,this.props.departments)}
                    </div>
                    
                </div>
                
            );
        }
    }


    export default StaffList;