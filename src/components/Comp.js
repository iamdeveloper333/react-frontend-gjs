import React,{Component} from 'react';
import { Container, Row, Col ,Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import {singleidRecordsRequest} from '../actions/singleid';
import {singlereadRecordsRequest} from '../actions/singleread';
import {clearRecords, readRecordsRequest} from '../actions/read';
import {connect} from 'react-redux';
import axios from 'axios';
const SCREEN_NAME = 'latest-job'

class Comp extends Component{

    constructor(props){
        super(props);
        this.state = {
            id:0
        }
        this.q=this.q.bind(this);
        this.likeBlog=this.likeBlog.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(readRecordsRequest({screen: SCREEN_NAME, query: '', limit: 10}))        
    }

    q(){
        console.log("q1",this.props.data.id);
      this.setState({id:this.props.data.id})       
      console.log("q2",this.state.id);
    }

    likeBlog(val){
        console.log("click like ",val,val.id);
        axios.put(`http://127.0.0.1:8000/web/PostApi/${val.id}`, 
        {
    "id": val.id,
    "job_like_status":!val.job_like_status,
    "post_title": val.post_title,
    "post_by": val.post_by,
    "short_description": val.short_description,
    "published_date": val.published_date,
    "last_date": val.last_date,
    "importantdates_set": val.importantdates_set,
    "state":val.state,
    "qualification": val.qualification,
    "category": val.category,
    "applicationfee_set": val.applicationfee_set,
    "eligibility_set": val.eligibility_set,
    "agelimit_set": val.agelimit_set,
    "vacancydetail_set":val.vacancydetail_set,
    "apply": val.apply,
    "notification": val.notification,
    "extra_info": val.extra_info,
    "o_website": val.o_website,
    "syllabus": val.syllabus
},
        {
            headers: {
                'Authorization': `Bearer ${this.props.authUser.user.token}`
            }
        }
        )

        .then(function (response) {
            console.log(response);
          
            })
            .catch(function (error) {
            console.log(error);
            });
            window.location.reload();
        

    }

    render(){
        return(
                    <Col sm={{ size: 3 }} className="mb-3" style={{display: '-webkit-inline-box',padding:'0px 8px'}}>
                        <Card className="h-100 w-100">
                            <CardHeader>{this.props.data.post_title}</CardHeader>
                            <CardBody>
                            <CardTitle>{this.props.data.post_by}</CardTitle>
                            <CardText className={'last-date'}><strong style={{ color: '#212121'}}>Last Date -</strong>{this.props.data.last_date}</CardText>
                            </CardBody>
                            <div className="row m-0">
                                <div className="col-lg-6 p-0">
                                <Button color="link" className={'lj-view-more'}><Link to={`/job/${this.props.data.category}/${this.props.data.state}/${this.props.data.post_title}/${this.props.data.id}`} onClick={this.q} target="_blank">View Job</Link></Button>
                                </div>
                                {/* <div className="col-lg-6 p-0">
                                <span className="float-right" style={{margin:'12px'}}>
                                <a className="like-btn" onClick={this.likeBlog.bind(this,this.props.data)}><i className={`far fa-heart ${this.props.data.job_like_status ? 'thumbs-up-orange' : 'thumbs-up-black'}`} style={{fontSize:'18px'}}></i></a>
                                </span>
                                </div> */}
                            </div>
                            
                        </Card>
                    </Col>
        )
    }
}

function mapStateToProps({read,authUser}) {
    return {
        read,authUser
    }
}

export default connect(mapStateToProps)(Comp)
