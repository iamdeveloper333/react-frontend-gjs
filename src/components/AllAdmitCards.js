import React,{Component} from 'react';
import WithoutNav from './WithoutNav';
import Footer from './Footer';
import Pagination from "react-js-pagination";
// import MainJobs from './MainJobs';
// import Comp from '../Comp';
import {clearRecords, admitreadRecordsRequest} from '../actions/readadmitcards';
import { Row, Col,ListGroup, ListGroupItem,Card,CardHeader,CardImg,CardBody,CardTitle,CardLink,Form,FormGroup,Input,Button} from 'reactstrap';
import {connect} from 'react-redux';
const SCREEN_NAME = 'admit-cards'



class AllJobs extends Component{
    constructor(props){
        super(props);
        this.state={
          value:'',
         
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
  this.props.dispatch(admitreadRecordsRequest({screen: SCREEN_NAME, query: this.state.value, limit: 10 ,}))


}

    render() {
        if(this.props.readadmitcards.count === 0){
            return(

                <div >
                <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                    <WithoutNav/>
                    <h3>Admit Cards</h3>
                    {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                    */}
                    <p>
                    Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more.</p>
                </div>
                <Row className="m-0 p-0" style={{background: '#edf1f252'}}>
                 <Col sm={{ size:10,offset:1}} className="pt-5">
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup style={{ width:'45%',margin: '0px auto',padding:'0px 20px 40px'}}>
                     <Input type="text" value={this.state.value} onChange={this.handleChange} name="text" id="exampleEmail" placeholder="Search Admit Cards" style={{fontSize: '14px',height: '40px',border: '1px solid #00000005',borderRadius:'0px',width:'80%',display:'inline-block'}} />
                     <Input type="submit" value="Submit" style={{display:'inline-block',width:'20%','borderRadius': '0px',background:' #f45526',border: '1px solid #f9fbfb',color: 'white'}}/>
                     </FormGroup>
                 </Form>
                <p className="text-center">No Data Found </p>
                 
                 </Col>
    
                </Row>
                    <Footer/>
                    
                </div>
            )
            
        }
        else if(this.props.readadmitcards.length > 0){
        let admitcards = this.props.readadmitcards.map((val,key)=>{
            return (
                <Col sm={{ size: 2 }} className="mb-3 p-1" key={val.id} style={{display:'-webkit-inline-box'}}>

                    <Card className="h-100 brzero">
                    <CardImg top width="100%" src={`${val.img_link}`} alt="Card image cap" />
                    <hr className={'mb-0'}/>
                    <CardHeader className="card-h mt-2 pb-1">{val.post_title}</CardHeader>
                    <CardBody className={'p-0'}>
                    <CardTitle className="c-title pt-0">{val.post_by}</CardTitle>

                        {/* <div className="text-center"><CardLink href={`${val.apply_link}`}>Download</CardLink></div> */}
                        </CardBody>
                        <Button color="link" className={'lj-view-more mt-1'} ><CardLink href={`${val.apply_link}`} target="_blank">Download</CardLink></Button>

                    </Card>
                </Col>
            )
        }
    );

        return(

            <div >
            <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <WithoutNav/>
                <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Admit Cards</h3>
                {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                */}
                <p>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more.</p>
            </div>
            <Row className="m-0 p-0">
             <Col sm={{ size:10,offset:1}} className="pt-5">
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup style={{ width:'45%',margin: '0px auto',padding:'0px 20px 40px'}}>
                 <Input type="text" value={this.state.value} onChange={this.handleChange} name="text" id="exampleEmail" placeholder="Search Admit Cards" style={{fontSize: '14px',height: '40px',border: '1px solid #00000005',borderRadius:'0px',width:'80%',display:'inline-block'}} />
                 <Input type="submit" value="Submit" style={{display:'inline-block',width:'20%','borderRadius': '0px',background:' #f45526',border: '1px solid #f9fbfb',color: 'white'}}/>
                 </FormGroup>
             </Form>
             <Row className="p-0 mb-5">
             {admitcards.reverse()}
             </Row>
             
             </Col>

            </Row>
                <Footer/>
            </div>
        )
    }
}
}

function mapStateToProps({readadmitcards}) {
    return {
        readadmitcards
    }
}

export default connect(mapStateToProps)(AllJobs)
