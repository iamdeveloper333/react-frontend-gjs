import React,{Component} from 'react';
import { Container, Row, Col ,Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,Nav, NavItem,FormGroup,Label,CustomInput,Form} from 'reactstrap';
    import { Route, Redirect } from 'react-router';
    import ResultStatus from './ResultStatus';
    import WithoutNav from './WithoutNav';

class QuestionsPaper extends Component{

    constructor(props){
        super(props);
        this.state = {
           question_data:[],
           loading:true,
           testPercentage:'',
           rightQuestions:[],
           wrongQuestions:[],
           resultStatus:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            question_data:this.props.location.state.data,loading:false
        })
       
        
    }
    handleChange(e){
        console.log("showwww ",e.target.value,e.target.name);
        
    }
    handleSubmit(e){
        e.preventDefault();
        var i=0;
        let CustomInput=[];
        CustomInput.push(e.target.customRadio1.value,e.target.customRadio2.value,e.target.customRadio3.value,e.target.customRadio4.value,e.target.customRadio5.value,e.target.customRadio6.value,e.target.customRadio7.value,e.target.customRadio8.value,e.target.customRadio9.value
            ,e.target.customRadio10.value,e.target.customRadio11.value,e.target.customRadio12.value,e.target.customRadio13.value,e.target.customRadio14.value,e.target.customRadio15.value,e.target.customRadio16.value,e.target.customRadio17.value,e.target.customRadio18.value,e.target.customRadio19.value,e.target.customRadio20.value);

       
        let b = [];
           for(let i=0;i<=19;i++){
               let a = this.props.location.state.data[i].a5;
               
               b.push(a);
               
           }
        // let count=0;
        let countRight =[];
            // for (let j=1; j <= CustomInput.length; j++) {
            //             if (b[j] === CustomInput[j]) { 
            //                 count++;
            //              }
                         
            //     }
                
            if(e.target.customRadio1.value===b[0]){
                let value = this.props.location.state.data[0]
                countRight.push(value)
            }
            if(e.target.customRadio2.value===b[1]){
                let value = this.props.location.state.data[1]
                countRight.push(value)
            }
            if(e.target.customRadio3.value===b[2]){
                let value = this.props.location.state.data[2]
                countRight.push(value)
            }
            if (e.target.customRadio4.value===b[3]){
                let value = this.props.location.state.data[3]
                countRight.push(value)
            }
            if (e.target.customRadio5.value===b[4]){
                let value = this.props.location.state.data[4]
                countRight.push(value)
            }
            if (e.target.customRadio6.value===b[5]){
                let value = this.props.location.state.data[5]
                countRight.push(value)
            }
            if (e.target.customRadio7.value===b[6]){
                let value = this.props.location.state.data[6]
                countRight.push(value)
            }
            if (e.target.customRadio8.value===b[7]){
                let value = this.props.location.state.data[7]
                countRight.push(value)
            }
            if (e.target.customRadio9.value===b[8]){
                let value = this.props.location.state.data[8]
                countRight.push(value)
            }
            if (e.target.customRadio10.value===b[9]){
                let value = this.props.location.state.data[9]
                countRight.push(value)
            }
            if (e.target.customRadio11.value===b[10]){
                let value = this.props.location.state.data[10]
                countRight.push(value)
            }
            if (e.target.customRadio12.value===b[11]){
                let value = this.props.location.state.data[11]
                countRight.push(value)
            }
            if (e.target.customRadio13.value===b[12]){
                let value = this.props.location.state.data[12]
                countRight.push(value)
            }
            if (e.target.customRadio14.value===b[13]){
                let value = this.props.location.state.data[13]
                countRight.push(value)
            }
            if (e.target.customRadio15.value===b[14]){
                let value = this.props.location.state.data[14]
                countRight.push(value)
            }
            if (e.target.customRadio16.value===b[15]){
                let value = this.props.location.state.data[15]
                countRight.push(value)
            }
            if (e.target.customRadio17.value===b[16]){
                let value = this.props.location.state.data[16]
                countRight.push(value)
            }
            if (e.target.customRadio18.value===b[17]){
                let value = this.props.location.state.data[17]
                countRight.push(value)
            }
            if (e.target.customRadio19.value===b[18]){
                let value = this.props.location.state.data[18]
                countRight.push(value)
            }
            if (e.target.customRadio20.value===b[19]){
                let value = this.props.location.state.data[19]
                countRight.push(value)
            }
            
        
            const percentageValue = ((countRight.length)*5);
            const intersection = this.props.location.state.data.filter(element => !countRight.includes(element));


            this.setState({
                testPercentage:percentageValue,
                rightQuestions:countRight,
                wrongQuestions:intersection,
                resultStatus:true
            })
           
            console.log("custom inputqqw",CustomInput,b ,percentageValue,countRight,b[0],intersection);
        
        
    }

    render(){
        if(this.state.loading) {
            return `.`
        } 
        else if(this.state.loading == false){
        console.log("questions data",this.state.question_data);
        let question_sets=this.state.question_data.map((val,index)=>{
            return (
                <FormGroup  key={index} >
                <Label className="question-heading" for={`exampleCustomRadio${val.question_num}`}>{index+1}{". "}{val.question}</Label>
                <div>
                  <CustomInput type="radio" id={`exampleCustomRadio${val.question}`} name={`customRadio${val.question_num}`} label={`${val.a1}`} value={`${val.a1}`} onChange={e=>this.handleChange(e)}/>
                  <CustomInput type="radio" id={`exampleCustomRadio1${val.question}`} name={`customRadio${val.question_num}`}  label={`${val.a2}`} value={`${val.a2}`}   onChange={e=>this.handleChange(e)} />    
                  <CustomInput type="radio" id={`exampleCustomRadio2${val.question}`} name={`customRadio${val.question_num}`}  label={`${val.a3}`} value={`${val.a3}`}   onChange={e=>this.handleChange(e)}/>    
                  <CustomInput type="radio" id={`exampleCustomRadio3${val.question}`} name={`customRadio${val.question_num}`}  label={`${val.a4}`} value={`${val.a4}`}   onChange={e=>this.handleChange(e)}/>    
                  
                </div>
              </FormGroup>
               
            )
        })
        return(
<div>
<WithoutNav/>

            <div className="container-fluid" style={{background:'#f9fbfb',marginTop:'75px'}}>
           
                <div className="row m-0">
                    <div className="col-lg-12">
                    
                    {this.state.resultStatus?
                    <div style={{marginTop:''}}>
                         <ResultStatus percentage={this.state.testPercentage}
                         correct={this.state.rightQuestions}
                         incorrect={this.state.wrongQuestions}/>
                         </div>:
                <Form onSubmit={this.handleSubmit} style={{
                    'background': 'white','padding': '3%','margin':' 2% 20%',
                    'transition': 'all 100ms ease-in-out',
                    'box-shadow': '0 0 1px 0 rgba(0,12,32,0.04), 0 10px 16px 0 rgba(10,31,68,0.06)'
                }}>
                <h4 style={{
                        'font-family': "'Josefin Sans', sans-serif",
                        'text-transform': 'uppercase',
                        'color': 'rgb(255, 87, 34)',
                        'padding': '10px 0px',
                        'font-size': "16px",
                        'borderBottom':'1px solid',
                        'paddingBottom':'20px',
                        'marginBottom':'20px'
                    
                }}>
                        {this.props.location.state.title} / {this.props.location.state.category} <span style={{color:'black'}}> / {this.props.location.state.sub_title}</span>
                    </h4>
                    
                  
                {question_sets}
                <div className="text-center test-submit">
                <Button color="primary" type="submit"  >Submit</Button>
                </div>
                                       </Form>
                                    }
                      

                    </div>
                </div>
            </div>

</div>
                   
        )
    }
}
}

export default QuestionsPaper;