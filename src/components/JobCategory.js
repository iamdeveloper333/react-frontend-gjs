import React, { Component } from "react";
import { Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom'
// import {clearRecords,searchRecordsRequest} from '../actions/searchparam';
import {connect} from 'react-redux';

class JobCategory extends Component {
    constructor(props){
        super(props);
        this.state={
            diffstate:['Andhra-Pradesh','Arunachal-Pradesh','Assam','A-N-Islands','Bihar','Chhattisgarh','Chandigarh','Delhi','D-N-Haveli','Daman-Diu','Goa','Gujarat','Lakshadweep','Haryana','Himachal-Pradesh','Jammu-Kashmir','Jharkhand','Karnataka','Kerala','Madhya-Pradesh','Maharashtra','Manipur','Meghalaya','Nagaland','Orissa','Punjab','Puducherry','Rajasthan','Tamil-Nadu','Telangana','Tripura','Uttar-Pradesh','Uttarakhand','West-Bengal','All-india'],
            diffcat:['Accounts-Finance-Jobs','Agriculture-Jobs','Bank-Jobs','Clerk-Steno-Jobs','Defense-Jobs','Police-Jobs','Engineering-Jobs','Faculty-Teaching-Jobs','IT-Computer-Jobs','Indian-Postal-Jobs','Law-Judiciary-Jobs','Management-Jobs','Medical-Pharma-Jobs','Oil-Gas-Jobs','Power-Energy-Jobs','Railway-Jobs','Scientist-Research-Jobs','UPSC-Jobs','PSC-Jobs','SSC-Jobs','Other'],
            diffqual:['10th','12th','8th','Bachelor','BA','B-Com','B-Ed','B-Pharma','B-Sc','BBA','BCA','BDS','B-Tech','CA-ICWA','CS-ICSA','Diploma','Graduate','ITI','LLB','LLM','Masters','MA','M-Com','M-Phil','M-Sc','MBA-PGDBM','MBBS','MCA','M-Tech','MSW','PhD','Other'],
           param:'',
        }
    }
    

    render() {
        
        let statedata= this.state.diffstate.map((val)=>{
            

            return(
                <Col sm={{ size: 2 }} className="mb-1 p-1" key={val}>
                    <li><i className="fab fa-telegram-plane"></i><Link to={`/search/${val}`} style={{color: 'white'}}>{val}</Link></li>
                </Col>
            )
        })
        let catdata= this.state.diffcat.map((val)=>{
            return(
                <Col sm={{ size: 3 }} className="mb-1 p-1" key={val}>
                    <li><i className="fab fa-telegram-plane icon-color"></i><Link to={`/search/${val}`} style={{color: 'black'}}>{val}</Link></li>
                </Col>
            )
        })
        let qualdata= this.state.diffqual.map((val)=>{
            return(
                <Col sm={{ size: 2 }} className="mb-1 p-1" key={val}>
                    <li><i className="fab fa-telegram-plane icon-color" style={{'color':'#25252bc9'}}></i><Link to={`/search/${val}`} style={{color: 'black'}}>{val}</Link></li>
                </Col>
            )
        })
        return (
            <div id="category">
                <div className="container-fuild job-cat-bg1" >
                    <h3 className="main-heading">Search by States & UT</h3>
                    <hr className="align-center gradient-teal-purple"/>
                    <Row className="m-0 p-0">              
                        {statedata}
                    </Row>
                </div>
            <div className="container-fuild job-cat-bg2" >
                <h3 className="main-heading">Search by Qualifications</h3>
                <hr className="align-center gradient-teal-purple"/>
                <Row className="m-0 p-0">
                    {qualdata}
                </Row>
            </div>
         <div className="container-fuild job-cat-bg3">
             <h3 className="main-heading">Search by Categories</h3>
             <hr className="align-center gradient-teal-purple"/>
             <Row className="m-0 p-0">
             {catdata}
         </Row>
         </div>
         </div>
        );
    }
}

function mapStateToProps({read}) {
    return {
        read
    }
}

export default connect(mapStateToProps)(JobCategory)