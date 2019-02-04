import React, { Component } from "react";
import { Container, Row, Col ,Card, CardHeader,ButtonCard, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardLink,Form,FormGroup,Input} from 'reactstrap';
    import {clearRecords, blogreadRecordsRequest} from '../actions/readblogs';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import WithoutNav from './WithoutNav';
import Footer from './Footer'

// const axios = require('axios');
const SCREEN_NAME = 'blogs'
import axios from 'axios';

class AllBlogs extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
        this.likeBlog=this.likeBlog.bind(this);

    }

    componentDidMount(){
        this.props.dispatch(blogreadRecordsRequest({screen: SCREEN_NAME, query: '', limit: 10}))
        // this.setState({data:this.props.readresults,loading:false});
        // console.log("heeyyy",this.props.readresults);
        var self = this;
        axios.get('http://127.0.0.1:8000/web/BlogsApi/')

        .then(function (response) {
            console.log(response);
            self.setState({data: response.data,loading: false})
            })
            .catch(function (error) {
            console.log(error);
            });

    }

    likeBlog(val){
        console.log("click like ",val.id,val.blog_like_status);
        var self = this;
        axios.put(`http://127.0.0.1:8000/web/BlogsApi/${val.id}`, 
        {
            "id": val.id,
            "blog_content": val.blog_by,
            "blog_by": val.blog_by,
            "blog_title": val.blog_title,
            "blog_view_link": val.blog_view_link,
            "blog_img_link": val.blog_img_link,
            "blog_created": val.blog_created,
            "blog_like_status": !val.blog_like_status
        },
        {
            headers: {
                'Authorization': `Bearer ${this.props.authUser.user.token}`
            }
        })

        .then(function (response) {
            console.log(response);
          
            })
            .catch(function (error) {
            console.log(error);
            });
            window.location.reload();
        
    }


    render() {
        if(this.state.data.length === 0){
            return(

                <div >
                <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                    <WithoutNav/>
                    <h3>Blogs</h3>
                    {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                    */}
                    <p>
                    Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more.</p>
                </div>
                <Row className="m-0 p-0" style={{background: '#edf1f252'}}>
                 <Col sm={{ size:10,offset:1}} className="pt-5">
                 
                <p className="text-center">No Data Found </p>
                 
                 </Col>
    
                </Row>
                    <Footer/>
                    
                </div>
            )
            
        }
        else if(this.state.data.length > 0){
            // let blogs = this.state.data.filter(val=>{
            //     return val.blog_like_status === true
            // })
        let savedblogs = this.state.data.map(val=>{
            return (
                <Col sm={{ size: 4 }} className="mb-3 p-1" key={val.id}>
                    <Card  className="h-100 brzero">
                    <div className="row m-0">
                        <div className="col-sm-5 p-0">
                        <CardImg  width="100%" height="150" src={`${val.blog_img_link}`} alt="Card image cap" />
                        </div>
                        <div className="col-sm-7 p-0">
                        <CardHeader className="card-h blog-title mt-2 pb-1">{val.blog_title}</CardHeader>
                         <CardBody className={'p-0'}>
                        <CardTitle className="c-title pt-0 pl-2 mb-2"><span style={{'color': 'grey','fontSize': '10px'}}>created at {val.blog_created}</span></CardTitle>
                        <div className="row m-0">
                        <div className="col-lg-6 p-0">
                      
                        <Button color="link" className={'blog-view p-0 pl-2'}>  <a href={`${val.blog_view_link}`} target="_blank">View</a></Button>
                            </div>
                            {/* <div className="col-sm-6">
                                <span className="float-right">
                                <a className="like-btn" onClick={this.likeBlog.bind(this,val)}><i className={`far fa-thumbs-up ${val.blog_like_status ? 'thumbs-up-orange' : 'thumbs-up-black'}`} style={{fontSize:'18px'}}></i></a>
                                </span>
                            </div> */}
                            </div>
                        </CardBody>
                        </div>
                    </div>
                    </Card>
                </Col>
            )
        }
    );
    return(

        <div >
        <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
            <WithoutNav/>
            <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Blogs</h3>
            {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
            */}
            <p style={{paddingBottom:'5%'}}>
            Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more. </p>
        </div>
        <Row className="m-0 p-0">
         <Col sm={{ size:12}} className="pt-5">
         
         <div className="container">
         <Row>
         {savedblogs.reverse()}
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

function mapStateToProps({authUser,readblogs}) {
    return {
        authUser,readblogs
    }
}

export default connect(mapStateToProps)(AllBlogs)
