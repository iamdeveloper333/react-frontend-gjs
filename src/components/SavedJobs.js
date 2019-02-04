import React, { Component } from "react";
import { Container, Row, Col ,Card, CardHeader,ButtonCard, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardLink} from 'reactstrap';
    // import {clearRecords, blogreadRecordsRequest} from '../actions/readblogs';
    import {clearRecords, readRecordsRequest} from '../actions/read';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import WithoutNav from './WithoutNav';
import Comp from './Comp';

// const axios = require('axios');
const SCREEN_NAME = 'latest-jobs'
import axios from 'axios';

class SavedJobs extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
        // this.likeJob=this.likeJob.bind(this);

    }

    componentDidMount(){
        this.props.dispatch(readRecordsRequest({screen: SCREEN_NAME, query: '', limit: 10}))
        // this.setState({data:this.props.readresults,loading:false});
        // console.log("heeyyy",this.props.readresults);
        var self = this;
        axios.get('http://127.0.0.1:8000/web/PostApi/',{
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

    // likeJob(val){
    //     console.log("click like ",val.id,val.blog_like_status);
    //     var self = this;
    //     axios.put(`http://127.0.0.1:8000/web/BlogsApi/${val.id}`, 
    //     {
    //         "id": val.id,
    //         "blog_content": val.blog_by,
    //         "blog_by": val.blog_by,
    //         "blog_title": val.blog_title,
    //         "blog_view_link": val.blog_view_link,
    //         "blog_img_link": val.blog_img_link,
    //         "blog_created": val.blog_created,
    //         "blog_like_status": !val.blog_like_status
    //     },
    //     {
    //         headers: {
    //             'Authorization': `Bearer ${this.props.authUser.user.token}`
    //         }
    //     })

    //     .then(function (response) {
    //         console.log(response);
          
    //         })
    //         .catch(function (error) {
    //         console.log(error);
    //         });
    //         window.location.reload();
        
    // }


    render() {
        if(this.state.loading) {
            console.log("wow2",this.state.loading);
            return `.`
        } 
        else if(this.state.loading == false){
            let jobs = this.props.read.filter(val=>{
                return val.job_like_status === true
            })

            let savedjobs = jobs.map((val,key)=>{
                return (
                    <Comp data={val} key={val.id}/>
                )
            }
        );
    

    
        return (
            <div>
                <div className="head"  style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <WithoutNav/>
                <h3 className={'mt-5'} style={{'padding-top': '115px'}}>Saved Jobs</h3>
                {/* <h5>Find the Latest Goverment jobs, Results and More...</h5>
                */}
                <p>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. 
Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare & many more. </p>  </div>
            <div className="container-fuild blogs" id="results">
                {/* <h3 className="main-heading">Saved Jobs</h3> */}
                {/* <hr className="align-center gradient-teal-purple"/> */}
                <div className="container p-0">

                <Row className="m-0 p-0">
             
               {savedjobs.reverse()}
                </Row>

                </div>   
                      </div>     
            </div>
        );
    }
    }
}

function mapStateToProps({authUser,read}) {
    return {
        authUser,read
    }
}

export default connect(mapStateToProps)(SavedJobs)
