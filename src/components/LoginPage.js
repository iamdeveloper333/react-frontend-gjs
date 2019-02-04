import React from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


import LoginForm from './LoginForm'



class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("checking the props>>",this.props)
        const {loggedIn} = this.props
        if (loggedIn === true) {
            return <Redirect to={"/"}/>

        }

        return(
            <div> <LoginForm/>      </div>
        )
            
    }
}

function mapStateToProps({authUser}) {

    return {
        loggedIn: authUser.loggedIn,
        attemptFailure:authUser.attemptFailure
    }
}

export default connect(mapStateToProps)(LoginPage);
