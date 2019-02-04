import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
const axios = require('axios');

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.value);
        axios.post('http://127.0.0.1:8000/web/EmailsApi/', {
            email: this.state.value
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.setState({value: ''});
      }
    render() {
        return (
            <div>
            <div className="container-fuild footer" id="touch" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <h1 className="text-uppercase">Get notifications directly into your E-mail.<br></br>WE WILL SEND YOU BREAKING UPDATES RIGHT TO YOUR INBOX.</h1>
                <Form onClick={this.handleSubmit}>
                    <FormGroup style={{ paddingTop:'20px',width: '30%',margin: '0px auto'}}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Mail" value={this.state.value} onChange={this.handleChange}  />
                    <div className="text-center"><Button className="subscription-btn-submit">Submit</Button></div>
                    </FormGroup>
                </Form>  
                            
            </div>
            <Row className="m-0 p-0">
                    <Col sm={{ size: 3 }} className="logo p-0">
                    <img src={`http://governmentjobstore.in/logos/logo3.png`} style={{ width: '185px',padding: '10px 15px',marginLeft: '50px'}}/>
                    </Col>
                    <Col sm={{ size: 7 }} className="">
                        <div className="container-fuild text-center py-4" style={{fontSize:'15px'}}>
                            All Rights Reserved &copy; GOVERNMENTJOBSTORE
                        </div>
                    </Col>
                    <Col sm={{ size: 2 }} className="">
                    {/* <ul>
                               <li> <a href="https://www.facebook.com/governmentjobstore1" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                     
                            <li><a href="https://www.linkedin.com/company/government-job-store" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                           
                            <li><a href="https://www.instagram.com/governmentjobstore/" target="_blank"> <i className="fab fa-instagram"></i></a></li>
                           
                            </ul> */}

                            <ListGroup style={{display:'inline-block'}}>
                                <ListGroupItem style={{display:'inline-block',width:'40px',height:'40px',borderRadius:'40px',background:'#f45526',padding:'0px',margin:'15px 1px'}}><a href="https://www.facebook.com/governmentjobstore333/" target="_blank"><i className="fab fa-facebook-f"></i></a></ListGroupItem>
                                <ListGroupItem style={{display:'inline-block',width:'40px',height:'40px',borderRadius:'40px',background:'#f45526',padding:'0px',margin:'15px 1px'}}><a href="https://www.linkedin.com/company/government-job-store" target="_blank"><i className="fab fa-linkedin-in"></i></a></ListGroupItem>
                                <ListGroupItem style={{display:'inline-block',width:'40px',height:'40px',borderRadius:'40px',background:'#f45526',padding:'0px',margin:'15px 1px'}}><a href="https://www.instagram.com/governmentjobstore/" target="_blank"> <i className="fab fa-instagram"></i></a></ListGroupItem>
                        
                            </ListGroup>
                    </Col>
                </Row>
               <p className="disclaimer">
               <strong>Disclaimer :</strong>  governmentjobstore.in does not charge users for access to information on our website. All information available here is freely available in the public domain. governmentjobstore.in is an aggregator and works towards dissemination of information to the general public at no cost to our users.
              All information provided on this web site is provided as is and without any liability. Although every reasonable effort is made to present current and accurate information, governmentjobstore.in makes no guarantees of any kind and cannot be held liable for any outdated or inaccurate information.
               </p>
         </div>
        );
    }
}

export default App;