import React from 'react';
import {connect} from "react-redux";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Button,  FormGroup,Form} from 'reactstrap';

import {getValidatedUser} from "../actions/authUser";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    password: Yup.string(),
    }),

    mapPropsToValues: props => ({
       ...props,
    name:'',
    password:'',
    }),

  handleSubmit: (values, {props, setSubmitting }) => {
    console.log("all values",values,props);
    const payload = {
    ...values
    };

    props.dispatch(getValidatedUser({username: values.name, password: values.password}))
    


    },
displayName: 'MyForm',
});



const MyForm = props => {
const {
values,
touched,
dirty,
errors,
handleChange,
handleBlur,
handleSubmit,
handleReset,
setFieldValue,
setFieldTouched,
isSubmitting,
} = props;
console.log("these are the foemic props",values)

return (
<div>
  
   <div className="container-fuild" style={{'background': 'linear-gradient(to right, #6FB1FC, #4364F7, #0052D4)'}}>
                  <Form onSubmit={handleSubmit} className="login-form">
                     <h4>Login Form</h4>
                    
                        <FormGroup>
                           <label  htmlFor="text" style={{ display: 'block' }}>
                           Name
                           </label>
                           <input
                              className="form-control"
                              id="name"
                              placeholder="Enter your name"
                              type="text"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              />
                           {errors.name &&
                           touched.name && (
                           <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.name}
                     </div>
                     )}
                     </FormGroup>

                     <FormGroup>
                           <label  htmlFor="text" style={{ display: 'block' }}>
                           Password
                           </label>
                           <input
                              className="form-control"
                              id="password"
                              placeholder="Enter your password"
                              type="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              />
                           {errors.password &&
                           touched.password && (
                           <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.password}
                     </div>
                     )}
                     </FormGroup>


                    

                     <div className="emp-profile-apply">
                        <Button  type="submit" disabled={isSubmitting} color="primary">Save</Button>{' '}
                     </div>
               </Form>
</div>
</div>
);
};


const LoginForm = formikEnhancer(MyForm);
// export default LoginForm;


function mapStateToProps(state) {
   console.log("show all props",state);
      
   return {
      //  loggedIn: authUser.loggedIn,
      //  attemptFailure:authUser.attemptFailure
      
   }
}

export default connect(mapStateToProps)(LoginForm);