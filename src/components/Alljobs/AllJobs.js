import React,{Component} from 'react';
import WithoutNav from '../WithoutNav';
import Footer from '../Footer';
import Comp from '../Comp';
import { Row, Col,ListGroup, ListGroupItem,Form,FormGroup,Input} from 'reactstrap';
import Pagination from "react-js-pagination";
import {clearRecords, readRecordsRequest} from '../../actions/read';
import {connect} from 'react-redux';
// require("bootstrap/less/bootstrap.less");
const axios = require('axios');
const SCREEN_NAME = 'latest-job'

class AllJobs extends Component{
    constructor(props){
        super(props);
        this.state={
            diffstate:['Andhra-Pradesh','Arunachal-Pradesh','Assam','A-N-Islands','Bihar','Chhattisgarh','Chandigarh','Delhi','D-N-Haveli','Daman-Diu','Goa','Gujarat','Lakshadweep','Haryana','Himachal-Pradesh','Jammu-Kashmir','Jharkhand','Karnataka','Kerala','Madhya-Pradesh','Maharashtra','Manipur','Meghalaya','Nagaland','Orissa','Punjab','Puducherry','Rajasthan','Tamil-Nadu','Telangana','Tripura','Uttar-Pradesh','Uttarakhand','West-Bengal','All-india'],
            diffcat:['Accounts-Finance-Jobs','Agriculture-Jobs','Bank-Jobs','Clerk-Steno-Jobs','Defense-Jobs','Police-Jobs','Engineering-Jobs','Faculty-Teaching-Jobs','IT-Computer-Jobs','Indian-Postal-Jobs','Law-Judiciary-Jobs','Management-Jobs','Medical-Pharma-Jobs','Oil-Gas-Jobs','Power-Energy-Jobs','Railway-Jobs','Scientist-Research-Jobs','UPSC-Jobs','PSC-Jobs','SSC-Jobs','Other'],
            diffqual:['10th','12th','8th','Bachelor','BA','B-Com','B-Ed','B-Pharma','B-Sc','BBA','BCA','BDS','B-Tech','CA-ICWA','CS-ICSA','Diploma','Graduate','ITI','LLB','LLM','Masters','MA','M-Com','M-Phil','M-Sc','MBA-PGDBM','MBBS','MCA','M-Tech','MSW','PhD','Other'],
             value:'',
            activePage: 15
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handlePageChange=this.handlePageChange.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
  }
  handlePageChange(pageNumber) {
   console.log(`active page is ${pageNumber}`);
   this.setState({activePage: pageNumber});
 }

  handleSubmit(event) {
      event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
    this.props.dispatch(readRecordsRequest({screen: SCREEN_NAME, query: this.state.value, limit: 10 ,}))


  }


    render() {
        if(this.props.read.count === 0){
            return(

                <div >
                <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                    <WithoutNav/>
                    <h3>Latest Jobs</h3>
                    <p>
                    Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India.<br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more.
                    </p>
                </div>
                <Row className="m-0 p-0">
                 <Col sm={{ size:12}} className="pt-5" style={{background: '#edf1f252'}}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup style={{ width:'45%',margin: '0px auto',padding:'0px 20px 40px'}}>
                        <Input type="text" value={this.state.value} onChange={this.handleChange} name="text" id="exampleEmail" placeholder="Search Latest Jobs" style={{fontSize: '14px',height: '40px',border: '1px solid #00000005',borderRadius:'0px',width:'80%',display:'inline-block'}} />
                        <Input type="submit" value="Submit" style={{display:'inline-block',width:'20%','borderRadius': '0px',background:' #f45526',border: '1px solid #f9fbfb',color: 'white'}}/>
                        </FormGroup>
                    </Form>
                 <p className="text-center">No Data Found...</p>
                 
                 </Col>
                
                 </Row>
                    <Footer/>
                   
                </div>
            )
        }
        else if(this.props.read.length > 0){
        let job = this.props.read.map((val,key)=>{
            return (
                <Comp data={val} key={val.id}/>
            )
        }
    );
    // let statedata= this.state.diffstate.map((val)=>{
    //     return(
    //         <ListGroupItem tag="a" href="#" key={val}>{val}</ListGroupItem>
    //     )
    // })
    // let catdata= this.state.diffcat.map((val)=>{
    //     return(
    //         <ListGroupItem tag="a" href="#" key={val}>{val}</ListGroupItem>
    //     )
    // })
    // let qualdata= this.state.diffqual.map((val)=>{
    //     return(
    //         <ListGroupItem tag="a" href="#" key={val}>{val}</ListGroupItem>
    //     )
    // })
        return(

            <div >
            <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <WithoutNav/>
                <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Latest Jobs</h3>
                {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                */}
                <p style={{paddingBottom:'5%'}}>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more. </p>
            </div>
            <Row className="m-0 p-0">
             <Col sm={{ size:12}} className="pt-5">
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup style={{ width:'45%',margin: '0px auto',padding:'0px 20px 40px'}}>
                 <Input className="commonsearch-input-field" type="text" value={this.state.value} onChange={this.handleChange} name="text" id="exampleEmail" placeholder="Search Latest Jobs" style={{fontSize: '14px',height: '40px',border: '1px solid #00000005',borderRadius:'0px',width:'80%',display:'inline-block'}} />
                 <Input type="submit" value="Submit" style={{display:'inline-block',width:'20%','borderRadius': '0px',background:' #f45526',border: '1px solid #f9fbfb',color: 'white'}}/>
                 </FormGroup>
             </Form>
             <div className="container">
             <Row>
            {job.reverse()}
             </Row>
             </div>
             
             </Col>
             {/* <Col sm={{ size: 2 }} className="text-center p-3">

             <h3 className="main-heading py-3">Search by States &amp; UT</h3>
             <ListGroup flush>
                {statedata}
            </ListGroup>

             <h3 className="main-heading py-3">Search by Qualifications</h3>
             <ListGroup flush>
               {catdata}
            </ListGroup>


              <h3 className="main-heading py-3">Search by Categories</h3>
             <ListGroup flush>
             {qualdata}
              </ListGroup>

             </Col> */}
             </Row>
                <Footer/>
               
            </div>
        )
    }
}
}

function mapStateToProps({read}) {
    return {
        read
    }
}

export default connect(mapStateToProps)(AllJobs)
