import React,{Component} from 'react';
import WithoutNav from '../WithoutNav';
import { ListGroup, ListGroupItem,Row, Col } from 'reactstrap';
import SingleJobTab from './SingleJobTab';
import Footer from '../Footer';
const axios = require('axios');
import {singlereadRecordsRequest} from '../../actions/singleread';
import {singleidRecordsRequest} from '../../actions/singleid';
import {clearRecords, readRecordsRequest} from '../../actions/read';
import {connect} from 'react-redux';
const SCREEN_NAME = 'single-job'

class SingleJob extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
    }


    componentDidMount(){
        console.log("inside singlejobs");
        console.log('param ',this.props.match)
        // this.props.dispatch(singleidRecordsRequest({val: this.props.match.params.id}))
        // this.props.dispatch(singlereadRecordsRequest({screen: SCREEN_NAME,val: this.props.singleid}))
        this.setState({data:this.props.singleread})
        console.log('data ',this.props.singleread)
        var self = this;
        axios.get(`http://127.0.0.1:8000/web/PostApi/${this.props.match.params.id}`)
        .then(function (response) {
        // console.log('wwwooowww',response.data);
        self.setState({data: response.data,loading: false})
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){

        if(this.state.loading) {
            // console.log("wow2",this.state.loading);
            return  <p className="text-center pt-5">Loading...</p>
        } 
        else if(this.state.loading == false){
        return(
            
            <div>
                <WithoutNav/>


                <Row className="m-0 p-0">
                    <Col sm={{ size:9}} className="" style={{marginTop:'75px'}}>
                        <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                            <h3 style={{fontSize:'24px','paddingTop': '115px'}}>{this.state.data.post_title}</h3>
                            <h5 style={{fontSize:'20px'}}>{this.state.data.post_by}</h5>
                            <p style={{fontSize:'15px'}}>
                            {this.state.data.short_description}
                            </p>
                        </div>
                    </Col>
                    <Col sm={{ size:3}} className="" style={{background: '#edf1f252',marginTop:'75px'}}>
                        <div>
                        <ListGroup flush>
                            <ListGroupItem tag="a" href={`${this.state.data.apply}`} className="single-job-list" style={{background:'#f45526',color:'white'}} target="_blank">Apply</ListGroupItem>
                            <ListGroupItem tag="a" href={`${this.state.data.notification}`} className="single-job-list" target="_blank">Notification</ListGroupItem>
                            <ListGroupItem tag="a" href={`${this.state.data.extra_info}`} className="single-job-list" target="_blank">Syllabus</ListGroupItem>
                            <ListGroupItem tag="a" href={`${this.state.data.o_website}`} className="single-job-list" target="_blank">Official Website</ListGroupItem>
                            <ListGroupItem tag="a" href={`${this.state.data.extra_info}`} className="single-job-list" target="_blank">Extra Information</ListGroupItem>
                        </ListGroup>
                        </div>
                    </Col>

                </Row>
                <SingleJobTab data={this.state.data} key={this.state.data.id}/>
                <Footer/>
                
            </div>
        )
    }
}
}


function mapStateToProps({read,singleread,singleid,authUser}) {
    return {
        read,singleread,singleid,authUser
    }
}

export default connect(mapStateToProps)(SingleJob)
