import React, { Component } from "react";
import { Container, Row, Col ,Card, CardHeader,ButtonCard, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardLink} from 'reactstrap';

import {clearRecords, resultreadRecordsRequest} from '../actions/readresults';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const axios = require('axios');
const SCREEN_NAME = 'results'

class ExamResult extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
    }

    componentDidMount(){
        this.props.dispatch(resultreadRecordsRequest({screen: SCREEN_NAME, query: '', limit: 10}))
        // this.setState({data:this.props.readresults,loading:false});
        // console.log("heeyyy",this.props.readresults);
        var self = this;
        axios.get('http://127.0.0.1:8000/web/ResultApi/?post_title=')
        .then(function (response) {
        console.log(response);
        self.setState({data: response.data,loading: false})
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    render() {
        if(this.state.loading) {
            console.log("wow2",this.state.loading);
            return `.`
        } 
        else if(this.state.loading == false){
        let results = this.state.data.map(val=>{
            return (
                <Col sm={{ size: 2 }} className="mb-3 p-1" key={val.id}>
                    <Card  className="h-100 brzero">
                        <CardImg top width="100%" src={`${val.img_link}`} alt="Card image cap" />
                        <hr className={'m-0'}/>
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
        return (
            <div className="container-fuild exam-result" id="results">
                <h3 className="main-heading">Exam Results</h3>
                <hr className="align-center gradient-teal-purple"/>
                <Row className="m-0 p-0">
               {results.reverse().slice(0,12)}
                </Row>
                <div className="text-center view-more"><Link to={'/results'} >View More</Link></div>
            </div>
        );
    }
    }
}

function mapStateToProps({readresults,authUser}) {
    return {
        readresults,authUser
    }
}

export default connect(mapStateToProps)(ExamResult)
