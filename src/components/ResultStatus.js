import React , {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import { Jumbotron, Button,Form,FormGroup,Label,CustomInput } from 'reactstrap';

import {Link} from 'react-router-dom'

export default class ResultStatus extends Component{
constructor(props){
    super(props);
console.log("show props in result",this.props);

}

    render(){

        let correct_set=this.props.correct.map((val,index)=>{
            return (
                <FormGroup  key={index} >
                <Label className="question-heading" for={`exampleCustomRadio${val.question_num}`}>{index+1}{". "}{val.question}</Label>
                <div className='answers'>
                  {val.a5}                  
                </div>
              </FormGroup>
               
            )
        })
        let incorrect_set=this.props.incorrect.map((val,index)=>{
            return (
                <FormGroup  key={index} >
                <Label className="question-heading" for={`exampleCustomRadio${val.question_num}`}>{index+1}{". "}{val.question}</Label>
                <div className='answers'>
                  {val.a5}                  
                </div>
              </FormGroup>
               
            )
        })


        return(
            <div>

            <div className="row " style={{margin:'25px 20%'}}>

<p className="col-lg-12 p-0 text-center" style={{
                    'font-family': '"Josefin Sans", sans-serif',
                    'text-transform': 'uppercase',
                    'font-size': '20px',
                    'margin':'25px 0px'
                }}>Result</p>
            <div className="col-lg-4 p-0">
<div style={{ margin: '15% 0',
    'transition': 'all 100ms ease-in-out',
   'box-shadow': '0 0 1px 0 rgba(0,12,32,0.04), 0 10px 16px 0 rgba(10,31,68,0.06)',
    'background': 'white',
    'padding': '15% 1%',
    'margin': '0px 10px',
  }}>

                  <CircularProgressbar 
  percentage={this.props.percentage}
  text={`${this.props.percentage}%`}
/>

</div>

            </div>
            <div className="col-lg-4 p-0">
            <Jumbotron className="result-jumbo" style={{ background:'white',   margin: '0px 10px'}}>
        <p style={{
                    'font-family': '"Josefin Sans", sans-serif',
                    'text-transform': 'uppercase',
                    'color': 'rgb(255, 87, 34)',
                    'font-size': '14px'
                }}>Correct Anwsers :</p>
        <p>
            {this.props.correct.length}
        </p>
       
      </Jumbotron>
            </div>
            <div className="col-lg-4 p-0">
            <Jumbotron className="result-jumbo" style={{    margin: '0px 10px'}}>
            <p style={{
                    'font-family': '"Josefin Sans", sans-serif',
                    'text-transform': 'uppercase',
                    'color': '#0288D1',
                    'font-size': '14px'
                }}>Incorrect Anwsers :</p>
        <p>
            {this.props.incorrect.length}
        </p>
      </Jumbotron>
            </div>
               
               
                {/* <Link to={{
                                     pathname:`/aptitude/`,
                                    }} style={
                                        {
                                            'display': 'block',
                                            'textAlign': 'center',
                                            'margin': '0px 0px 12px' 
                                        }
                                    }  >Back To Aptitude Page</Link> */}

            </div>
            <div>
                <Form className="correct-ans">
                <p style={{
                    'font-family': '"Josefin Sans", sans-serif',
                    'text-transform': 'uppercase',
                    'color': 'rgb(255, 87, 34)',
                    'font-size': '15px'
                }}>Correct Attempt :</p>
                {correct_set}
                </Form>
            </div>

            <div>
                <Form className="correct-ans">
                <p style={{
                    'font-family': '"Josefin Sans", sans-serif',
                    'text-transform': 'uppercase',
                    'color': '#0288D1',
                    'font-size': '15px'
                }}>Incorrect Attempt :</p>
                {incorrect_set}
                </Form>
            </div>
            </div>
        )
    }
}