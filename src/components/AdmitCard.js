import React, { Component } from "react";
import { Container, Row, Col ,Card, CardHeader,ButtonCard, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardLink} from 'reactstrap';
import {clearRecords, admitreadRecordsRequest} from '../actions/readadmitcards';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const axios = require('axios');
const SCREEN_NAME = 'admit-cards'

class AdmitCard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
    }

    componentDidMount(){
        this.props.dispatch(admitreadRecordsRequest({screen: SCREEN_NAME, query: '', limit: 10}))
        // this.setState({data:this.props.readadmitcards,loading: false});
        var self = this;
            axios.get('http://127.0.0.1:8000/web/AdmitCardsApi/?post_title=')
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
        let admitcards = this.state.data.map(val=>{
            return (
                <Col sm={{ size: 2 }} className="mb-3 p-1" key={val.id}>
                    <Card className="h-100 brzero">
                    <CardImg top width="100%" src={`${val.img_link}`} alt="Card image cap" />
                    <hr className={'m-0'}/>
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
        return (
            <div className="container-fuild admit-card" id="admitcards">
                <h3 className="main-heading">Admit Card</h3>
                <hr className="align-center gradient-teal-purple"/>
                <Row className="p-0">
               {admitcards.reverse().slice(0,12)}
                </Row>
                <div className="text-center view-more"><Link to={'/admitcards'}>View More</Link></div>
                       
            </div>
        );
    }
}
}

function mapStateToProps({readadmitcards,authUser}) {
    return {
        readadmitcards,authUser
    }
}

export default connect(mapStateToProps)(AdmitCard)
