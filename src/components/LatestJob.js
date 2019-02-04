import React, { Component } from "react";
import { Container, Row, Col ,Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText} from 'reactstrap';
import {Link} from 'react-router-dom'
import Comp from './Comp';
import {clearRecords, readRecordsRequest} from '../actions/read';
import {connect} from 'react-redux';


const axios = require('axios');
const SCREEN_NAME = 'latest-job'

class LatestJob extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading: true
        }
    }

    componentDidMount(){
        // this.props.dispatch(readRecordsRequest({screen: SCREEN_NAME, query: '', limit: 10}))
        // this.setState({data:this.props.read,loading: false});
       
        var self = this;
            axios.get('http://127.0.0.1:8000/web/PostApi/')
            .then(function (response) {
            console.log(response);
            self.setState({data: response.data,loading: false})
            })
            .catch(function (error) {
            console.log(error);
            });
        // console.log("wow1",this.state.loading,this.props.read,this.state.data);
        
    }

    render() {

        if(this.state.loading) {
            // console.log("wow2",this.state.loading);
            return  <p className="text-center pt-5">Loading...</p>
        } 
        else if(this.state.loading == false){
            // console.log("wow3",this.state.data,this.props.read);
            // return `<h1>After Load...</h1>`
        
            let job = this.state.data.map((val,key)=>{
                return (
                    <Comp data={val} key={val.id}/>
                )
            }      
        );
        return (
            <Container id="job">
                <h3 className="main-heading">Latest Jobs <span style={{    'background': "white",'color':'#FF5722',
    'padding': '10px 0px',
    'textAlign': 'center',
    'fontSize': '18px'}}>[ Join <a href={`https://chat.whatsapp.com/BHb94BPbwBWLOYhpEegit5`}><img src={`http://governmentjobstore.in/logos/whatsapp.png`} width="30"/></a> Group ]</span></h3>
                <hr className="align-center gradient-teal-purple"/>
                
                {/* <ins class="adsbygoogle" style="display:inline-block;width:730px;height:390px" data-ad-client="ca-pub-1927745760877587" ></ins> */}
                <Row>
                    <div>
                   
                    </div>
                {job.reverse().slice(0,12)}
                  
                </Row>
                <div className="text-center view-more"><Link to={'/alljobs'}>View More</Link></div>
            </Container>
        );
        }
        

        
    }
}

function mapStateToProps({read,authUser}) {
    return {
        read,authUser
    }
}

export default connect(mapStateToProps)(LatestJob)
