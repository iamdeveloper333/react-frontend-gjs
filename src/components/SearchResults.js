import React,{Component} from 'react';
import WithoutNav from './WithoutNav';
import Footer from './Footer';
// import MainJobs from './MainJobs';
import {Link} from 'react-router-dom'
import Comp from './Comp';
import { Row, Col,ListGroup, ListGroupItem} from 'reactstrap';
import {connect} from 'react-redux';

import {clearRecords,searchRecordsRequest} from '../actions/searchparam';
const SCREEN_NAME = 'latest-job'


class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            diffstate:['Andhra-Pradesh','Arunachal-Pradesh','Assam','A-N-Islands','Bihar','Chhattisgarh','Chandigarh','Delhi','D-N-Haveli','Daman-Diu','Goa','Gujarat','Lakshadweep','Haryana','Himachal-Pradesh','Jammu-Kashmir','Jharkhand','Karnataka','Kerala','Madhya-Pradesh','Maharashtra','Manipur','Meghalaya','Nagaland','Orissa','Punjab','Puducherry','Rajasthan','Tamil-Nadu','Telangana','Tripura','Uttar-Pradesh','Uttarakhand','West-Bengal','All-india'],
            diffcat:['Accounts-Finance-Jobs','Agriculture-Jobs','Bank-Jobs','Clerk-Steno-Jobs','Defense-Jobs','Police-Jobs','Engineering-Jobs','Faculty-Teaching-Jobs','IT-Computer-Jobs','Indian-Postal-Jobs','Law-Judiciary-Jobs','Management-Jobs','Medical-Pharma-Jobs','Oil-Gas-Jobs','Power-Energy-Jobs','Railway-Jobs','Scientist-Research-Jobs','UPSC-Jobs','PSC-Jobs','SSC-Jobs','Other'],
            diffqual:['10th','12th','8th','Bachelor','BA','B-Com','B-Ed','B-Pharma','B-Sc','BBA','BCA','BDS','B-Tech','CA-ICWA','CS-ICSA','Diploma','Graduate','ITI','LLB','LLM','Masters','MA','M-Com','M-Phil','M-Sc','MBA-PGDBM','MBBS','MCA','M-Tech','MSW','PhD','Other'],
            }
        
    }
    componentDidMount(){
        console.log("q2",this.props.match.params.id);
        
        this.props.dispatch(searchRecordsRequest({screen: SCREEN_NAME,query:this.props.match.params.id}))
      
    }

    render() {
        
        if(this.props.searchparam.count === 0){
            // let statedata= this.state.diffstate.map((val)=>{
            //     return(
            //         <ListGroupItem tag="a" href="#" key={val}><Link to={`/search/${val}`}>{val}</Link></ListGroupItem>
            //     )
            // })
            // let catdata= this.state.diffcat.map((val)=>{
            //     return(
            //         <ListGroupItem tag="a" href="#" key={val}><Link to={`/search/${val}`}>{val}</Link></ListGroupItem>
            //     )
            // })
            // let qualdata= this.state.diffqual.map((val)=>{
            //     return(
            //         <ListGroupItem tag="a" href="#" key={val}><Link to={`/search/${val}`}>{val}</Link></ListGroupItem>
            //     )
            // })         
            return (
                <div >
                    <div className="head"  style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                        <WithoutNav/>
                        <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Search Results</h3>
                        {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                        */}
                        <p>
                        Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more.

            </p>
                    </div>
                    <Row className="m-0 p-0">
                <Col sm={{ size:12}} className="py-5" style={{background: '#edf1f252'}}>                
                <p className="text-center">No Data Found...</p>
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
        else if(this.props.searchparam.length > 0){
            let job = this.props.searchparam.map((val,key)=>{
                return (
                    <Comp data={val} key={val.id}/>
                )
            }      
        );
        
        
        // let statedata= this.state.diffstate.map((val)=>{
        //     return(
        //         <ListGroupItem tag="a" href="#" key={val}> <Link to={`/search/${val}`}>{val}</Link></ListGroupItem>
        //     )
        // })
        // let catdata= this.state.diffcat.map((val)=>{
        //     return(
        //         <ListGroupItem tag="a" href="#" key={val}><Link to={`/search/${val}`}>{val}</Link></ListGroupItem>
        //     )
        // })
        // let qualdata= this.state.diffqual.map((val)=>{
        //     return(
        //         <ListGroupItem tag="a" href="#" key={val}><Link to={`/search/${val}`}>{val}</Link></ListGroupItem>
        //     )
        // })
        return(

            <div >
            <div className="head"  style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <WithoutNav/>
                <h3 className={'mt-5'} style={{'padding-top': '115px'}} >Latest Jobs</h3>
                {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                */}
                <p>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. 
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more. </p>
            </div>
            <div className="container">
            <Row className="m-0 p-0" style={{background: ''}}>
                <Col sm={{ size:12}} className="pt-5" >                
                {job.reverse()}
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
             </div>
                <Footer/>
                
            </div>
        )
    }
}
}

function mapStateToProps({searchparam}) {
    return {
        searchparam
    }
}

export default connect(mapStateToProps)(SearchResults)
