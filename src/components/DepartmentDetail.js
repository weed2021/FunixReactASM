import React from "react";
import {Table , Card ,  CardHeader,  CardBody, CardImg, Breadcrumb, BreadcrumbItem} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

// function RenderStaffs({staff,DEPARTMENTS}){
//     if(staff == null){
//         return(<div></div>);
//     }
//     return(
//         <React.Fragment>
//             <h1>OK</h1>
//         </React.Fragment>
//     );
// }

const DepartmentDetail = (props) => {
    return(
        <div style={{padding:'2vw'}}>
            <div className="row " >
                <Breadcrumb className='col-md-12'>   
                    <BreadcrumbItem><Link to='/'><b>Nhân viên</b></Link></BreadcrumbItem>
                    <BreadcrumbItem active><b>{props.staffs.name}</b></BreadcrumbItem>
                </Breadcrumb>
                {/* <RenderStaffs staff={props.staff} /> */}
            </div>
        </div>
        
    );
}

export default DepartmentDetail;