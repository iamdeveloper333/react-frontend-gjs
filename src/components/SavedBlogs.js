import React, { Component } from "react";
import { Container, Row, Col ,Card, CardHeader,ButtonCard, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardLink} from 'reactstrap';
    import {clearRecords, blogreadRecordsRequest} from '../actions/readblogs';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import WithoutNav from './WithoutNav'

// const axios = require('axios');
const SCREEN_NAME = 'blogs'
import axios from 'axios';

class SavedBlogs extends Component {
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
        axios.get('http://127.0.0.1:8000/web/BlogsApi/',{
            headers: {
                'Authorization': `Bearer ${this.props.authUser.user.token}`
            }
        })

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
        if(this.state.loading) {
            console.log("wow2",this.state.loading);
            return `.`
        } 
        else if(this.state.loading == false){
            let blogs = this.state.data.filter(val=>{
                return val.blog_like_status === true
            })
        let savedblogs = blogs.map(val=>{
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
                      
                        <Button color="link" className={'blog-view p-0 pl-2'}>  <a href={`${val.blog_url_link}`}>View</a></Button>
                            </div>
                            <div className="col-sm-6">
                                <span className="float-right">
                                <a className="like-btn" onClick={this.likeBlog.bind(this,val)}><i className={`far fa-thumbs-up ${val.blog_like_status ? 'thumbs-up-orange' : 'thumbs-up-black'}`} style={{fontSize:'18px'}}></i></a>
                                </span>
                            </div>
                            </div>
                        </CardBody>
                        </div>
                    </div>
                    </Card>
                </Col>
            )
        }
    );
    

    
        return (
            <div>
                <div className="head"  style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <WithoutNav/>
                <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Saved Blogs</h3>
                {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                */}
                <p>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. 
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more. </p>  </div>
            <div className="container-fuild blogs" id="results">
                {/* <h3 className="main-heading">Saved Blogs</h3>
                <hr className="align-center gradient-teal-purple"/> */}
                <div className="container p-0">

                <Row className="m-0 p-0">
             
               {savedblogs.reverse()}
                </Row>

                </div>   
                      </div>     
            </div>
        );
    }
    }
}

function mapStateToProps({authUser,readblogs}) {
    return {
        authUser,readblogs
    }
}

export default connect(mapStateToProps)(SavedBlogs)
