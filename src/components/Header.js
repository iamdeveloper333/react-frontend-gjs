import React, { Component } from "react";
import Navbar from './Navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import {
    Link
  } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                <Navbar/>
                <h3></h3>
                <h2>Find latest Public sector Unit, Central and State Government Jobs.</h2>
                <p>
                Government Jobs store is all in one place where you can find all the latest notifications, announcements, contract and permanent government jobs across India. <br/>Search & find the Government Jobs across Defence, Railway, Banking, Teaching, Research, Healthcare &amp; many more.
                </p>
                <div className="row m-0">
                <div className="col-lg-12 p-0 text-center mb-5">
                <Button color="primary" className="aer-btn"><Link to={'/aptitude'} >Aptitude</Link></Button>{' '}
                {/* <Button color="primary" className="aer-btn"><Link to={'/reasoning'} >Reasoning</Link></Button>{' '}*/}
                {/* <Button color="primary" className="aer-btn"><Link to={'/english'} >English</Link></Button>{' '}  */}

</div>
                </div>
                
            </div>
        );
    }
}

export default App;
