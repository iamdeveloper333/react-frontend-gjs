import React,{Component} from 'react';
const axios = require('axios');
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import WithoutNav from './WithoutNav';

class Reasoning extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
        // this.onClick=this.onClick.bind(this);
    }


    componentDidMount(){
        // console.log("inside Aptitudes");
        // console.log('param ',this.props.match)
        // // this.props.dispatch(singleidRecordsRequest({val: this.props.match.params.id}))
        // // this.props.dispatch(singlereadRecordsRequest({screen: SCREEN_NAME,val: this.props.singleid}))
        // this.setState({data:this.props.singleread})
        // console.log('data ',this.props.singleread)
        var self = this;
        axios.get('http://127.0.0.1:8000/web/AptitudeTestApi/')
        .then(function (response) {
        
            self.setState({data:response.data,loading:false})
        console.log('wwwooowww',response.data,self.state.data);
        // self.setState({data: response.data,loading: false})
        })
        .catch(function (error) {
        console.log(error);
        });

    }

     q(val){
        console.log("show values",val);
        
    }

    
    render(){
       
       
        if(this.state.loading) {
            console.log("wow2",this.state.loading);
            return `.`
        } 
        else if(this.state.loading == false){
            let something = this.state.data.map(val=>{
                console.log("replace str",typeof(val.category_description))
                return(
                    
                    
                    <div className="mb-5"  key={val.id}>
                        <h4 style={{
                                'fontFamily': "'Josefin Sans', sans-serif",
                                'textTransform': 'uppercase',
                                'paddingBottom': '12px',
                                'fontSize': '20px',
                                'borderBottom': '1px solid #dce1e4',
                                'marginBottom': '20px',
                                'color': '#f45526',
                                'textAlign': 'center'
                        }}>{val.category_title}</h4>

                        {/* <div>{val.category_description}</div>  */}
                        <div dangerouslySetInnerHTML={{ __html: `${val.category_description}` }} />
                        <div className="row m-0">
                        {val.test_set.map( (val)=> {
                           
                            let question_set = val.question_set;
                            return (
                                <div className="col-lg-3 p-1">
                                <ListGroupItem  tag="a"  key={val.id} style={{
                                    "padding": "30px 20px 20px",
                                    "fontFamily": "'Josefin Sans', sans-serif",
                                    "textTransform": "uppercase",
                                    "fontSize": "18px",
                                    "transition": "all 100ms ease-in-out",
                                    "boxShadow": "0 0 1px 0 rgba(0,12,32,0.04), 0 10px 16px 0 rgba(10,31,68,0.06)",
                                    "marginBottom": "14px",
                                    "border": "1px solid #0000000f"
                                }}>
                                <Link to={{
                                     pathname:`/aptitude/${val.test_title}`,
                                     state: {data: question_set,title:'Aptitude',category:`${val.test_category}`,sub_title:`${val.test_title}`}
                                    }} style={
                                        {
                                            'display': 'block',
                                            'textAlign': 'center',
                                            'margin': '0px 0px 12px' 
                                        }
                                    }  >{val.test_title}</Link>
                                    
                                  
                                    </ListGroupItem>
                                    </div>
                                    
                            );
                            })}
                            
                            
                            </div>
                            
                       
                    </div>
                )
            })
        
            return(
                <div>
                    {/* <Navbar/> */}
                    <div className="head" style={{'backgroundImage': 'url(http://governmentjobstore.in/logos/call-to-action.png)','backgroundRepeat': 'no-repeat','backgroundSize': 'cover','height': '100%'}}>
                    <WithoutNav/>
                    <h3 style={{marginTop:' 75px','fontSize': '40px','padding': '60px 0px 40px'}}>Reasoning</h3>
                   
                  
                </div>
                <div className="container">
                    <div className="row m-0">
                       <div className="col-lg-8 p-0">
                       <h4>
                          {something}
                          
                       </h4>
                      
                  
                       </div>
           
                    </div>
                    </div>
                      
                </div>)
    
            }
        }


}

function mapStateToProps({authUser}) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(Reasoning)
