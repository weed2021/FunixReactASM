    import React,{Component} from "react";
    import {Table , Card, Button, CardHeader, CardImg, CardBody} from "reactstrap";
    import dateFormat from "dateformat";
    import StaffDetail from "./StaffDetailComponent";


    class StaffList extends Component{
        constructor(props){
            super(props);
            this.state = {
                selectedStaff: null,
                dropdownOpen: false,
                // classColStaff :"col-6 col-md-4 col-lg-2 p-4",
                // size:"lg",
                
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

  

        render(){
            const staffs = this.props.staffs.map((staff)=>{
                
                    return(
                        <div  key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
                            <Card size='lg'>
                            <CardImg top width="100%" src={staff.image} alt="Card image cap" />
                            <CardBody>
                                
                                <Button onClick={()=>this.onStaffSelect(staff)} className="btn-block">{staff.name}</Button>
                            </CardBody>
                            </Card>
                        </div>
                        
                    );
                }   
            )       

            
            return(
                <div className = "container-fluid alert alert-info px-5">
                    <div className="row pt-5" >
                        <div className='col-12'>
                            <h3 className='text-center font-weight-bold'>DANH SÁCH NHÂN VIÊN</h3> 
                            <hr />
                        </div>
                            
                    </div>

                    

                    <div className="row pt-3" >
                            {staffs} 
                    </div>
                    
                    <div className="row alert-info" >
                        <StaffDetail staff={this.state.selectedStaff} departments={this.props.departments}/>
                    </div>
                    
                </div>
                
            );
        }
    }


    export default StaffList;