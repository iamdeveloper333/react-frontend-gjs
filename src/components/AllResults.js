import React,{Component} from 'react';
import WithoutNav from './WithoutNav';
import Footer from './Footer';
import Pagination from "react-js-pagination";
import {clearRecords, resultreadRecordsRequest} from '../actions/readresults';
// import MainJobs from './MainJobs';
// import Comp from '../Comp';
import { Row, Col,ListGroup, ListGroupItem,Form,FormGroup,Input,CardHeader,Button,Card,CardImg,CardBody,CardTitle,CardLink} from 'reactstrap';
import {connect} from 'react-redux';
const SCREEN_NAME = 'results'


class AllResults extends Component{
    constructor(props){
        super(props);
        this.state={
            diffstate:['Andhra-Pradesh','Arunachal-Pradesh','Assam','A-N-Islands','Bihar','Chhattisgarh','Chandigarh','Delhi','D-N-Haveli','Daman-Diu','Goa','Gujarat','Lakshadweep','Haryana','Himachal-Pradesh','Jammu-Kashmir','Jharkhand','Karnataka','Kerala','Madhya-Pradesh','Maharashtra','Manipur','Meghalaya','Nagaland','Orissa','Punjab','Puducherry','Rajasthan','Tamil-Nadu','Telangana','Tripura','Uttar-Pradesh','Uttarakhand','West-Bengal','All-india'],
            diffcat:['Accounts-Finance-Jobs','Agriculture-Jobs','Bank-Jobs','Clerk-Steno-Jobs','Defense-Jobs','Police-Jobs','Engineering-Jobs','Faculty-Teaching-Jobs','IT-Computer-Jobs','Indian-Postal-Jobs','Law-Judiciary-Jobs','Management-Jobs','Medical-Pharma-Jobs','Oil-Gas-Jobs','Power-Energy-Jobs','Railway-Jobs','Scientist-Research-Jobs','UPSC-Jobs','PSC-Jobs','SSC-Jobs','Other'],
            diffqual:['10th','12th','8th','Bachelor','BA','B-Com','B-Ed','B-Pharma','B-Sc','BBA','BCA','BDS','B-Tech','CA-ICWA','CS-ICSA','Diploma','Graduate','ITI','LLB','LLM','Masters','MA','M-Com','M-Phil','M-Sc','MBA-PGDBM','MBBS','MCA','M-Tech','MSW','PhD','Other'],
            data:[],
            value:'',
            activePage: 15
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
  }
 

  handleSubmit(event) {
      event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
    this.props.dispatch(resultreadRecordsRequest({screen: SCREEN_NAME, query: this.state.value, limit: 10 ,}))


  }
    // componentDidMount(){
    //     this.props.dispatch(admitreadRecordsRequest({screen: SCREEN_NAME, offset: 0, limit: 10}))
    //     this.setState({data:this.props.readresults});
    // }

    render() {
        if(this.props.readresults.count === 0){
            return(

                <div >
                <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                    <WithoutNav/>
                    <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Results</h3>
                    {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                    */}
                    <p>
                    Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India.<br/> 
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more.</p>
                </div>
                <Row className="m-0 p-0">
                 <Col sm={{ size:10,offset:1}} className="pt-5">
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup style={{ width:'45%',margin: '0px auto',padding:'0px 20px 40px'}}>
                     <Input type="text" value={this.state.value} onChange={this.handleChange} name="text" id="exampleEmail" placeholder="Search Results" style={{fontSize: '14px',height: '40px',border: '1px solid #00000005',borderRadius:'0px',width:'80%',display:'inline-block'}} />
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
        else if(this.props.readresults.length > 0){
        let results = this.props.readresults.map((val,key)=>{
            return (
                <Col sm={{ size: 2 }} className="mb-3 p-1" key={val.id} style={{display:'-webkit-inline-box'}}>
                <Card  className="h-100 brzero">
                        <CardImg top width="100%" src={`${val.img_link}`} alt="Card image cap" />
                        <hr className={'mb-0'}/>
                        <CardHeader className="card-h mt-2 pb-1">{val.post_title}</CardHeader>
                   <CardBody className={'p-0'}>
                        <CardTitle className="c-title pt-0">{val.post_by}</CardTitle>
                        {/* <div className="text-center"><CardLink href={`${val.aaply_link}`}>View</CardLink></div> */}
                        </CardBody>
                        <Button color="link" className={'lj-view-more mt-1 btn-lg'} ><CardLink href={`${val.view_link}`} style={{padding:'10px 30px'}} target="_blank">View</CardLink></Button>

                    </Card>
            </Col>
            )
        }
    );

        return(

            <div >
            <div className="head"  style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <WithoutNav/>
                <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Results</h3>
                {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                */}
                <p>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. 
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more. </p>  </div>
            <Row className="m-0 p-0" >
             <Col sm={{ size:10,offset:1}} className="pt-5">
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup style={{ width:'45%',margin: '0px auto',padding:'0px 20px 40px'}}>
                 <Input type="text" value={this.state.value} onChange={this.handleChange} name="text" id="exampleEmail" placeholder="Search Results" style={{fontSize: '14px',height: '40px',border: '1px solid #00000005',borderRadius:'0px',width:'80%',display:'inline-block'}} />
                 <Input type="submit" value="Submit" style={{display:'inline-block',width:'20%','borderRadius': '0px',background:' #f45526',border: '1px solid #f9fbfb',color: 'white'}}/>
                 </FormGroup>
             </Form>
             <Row className="p-0 mb-5">
             {results.reverse()}
             </Row>
             {/* <div className="text-center">
             <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={this.handlePageChange}
      />
             </div> */}
             </Col>

            </Row>
                <Footer/>
                
            </div>
        )
    }
}
}

function mapStateToProps({readresults}) {
    return {
        readresults
    }
}

export default connect(mapStateToProps)(AllResults)
