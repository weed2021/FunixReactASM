    import React,{Component,useState} from "react";
    import { Link } from "react-router-dom";
    import {Card, Button, CardImg, CardBody,CardHeader} from "reactstrap";
    import StaffDetail from "./StaffDetailComponent";

    // function StaffList(){
    //     const [selectedStaff,setSelectedStaff] =useState({
    //         selectedStaff: null
    //     })
    //     const [dropdownOpen,setDropdownOpen] =useState({
    //         dropdownOpen: false
    //     })

    //     return (

    //     );
    // }

    const StaffList = (props) =>{
        const staffs = props.staffs.map((staff)=>{
            return(
                <div  key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
                    <Link to={`/staff/${staff.id}`}>
                        <Card size='lg'>
                            <CardImg top width="100%" src={staff.image} alt={staff.name} />
                            <CardHeader className='text-center bg-info'>{staff.name}</CardHeader>
                        </Card>
                    </Link>
                </div> 
            );
        }) 
        return(
            <div style={{padding:'3vw'}}>
                <div className="row pt-5" >
                    <div className='col-12'>
                        <h3 className='text-center font-weight-bold'>DANH SÁCH NHÂN VIÊN</h3> 
                        <hr />
                    </div> 
                </div>

                <div className="row pt-4" >
                    {staffs} 
                </div> 
            </div>
            
        );

    };

    // class StaffList extends Component{
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             selectedStaff: null,
    //             dropdownOpen: false       
    //         }
    //         // This binding is necessary to make `this` work in the callback
    //         // this.handleClickDefault = this.handleClickDefault.bind(this);
    //         // this.handleClick2 = this.handleClick2.bind(this);
    //         // this.handleClick3 = this.handleClick3.bind(this);
    //         // this.handleClick4 = this.handleClick4.bind(this);
    //     }

    //     onStaffSelect(staff){
    //         this.setState({selectedStaff:staff})
    //     }

  

    //     render(){
    //         const staffs = this.props.staffs.map((staff)=>{
    //                 return(
    //                     <div  key={staff.id} className="col-6 col-md-4 col-lg-2 p-2">
    //                         <Link to={`/staff/${staff.id}`}>
    //                             <Card size='lg'>
    //                                 <CardImg top width="100%" src={staff.image} alt={staff.name} />
    //                                 <CardHeader className='text-center bg-info'>{staff.name}</CardHeader>
    //                             </Card>
    //                         </Link>
    //                     </div> 
    //                 );
    //             }   
    //         )       

            
    //         return(
    //             <div style={{padding:'3vw'}}>
    //                 <div className="row pt-5" >
    //                     <div className='col-12'>
    //                         <h3 className='text-center font-weight-bold'>DANH SÁCH NHÂN VIÊN</h3> 
    //                         <hr />
    //                     </div> 
    //                 </div>

                    

    //                 <div className="row pt-4" >
    //                         {staffs} 
    //                 </div>
                    
                    
                    
    //             </div>
                
    //         );
    //     }
    // }


    export default StaffList;