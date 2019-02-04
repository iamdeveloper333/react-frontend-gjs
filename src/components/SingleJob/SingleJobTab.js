import React,{Component} from 'react';
import { Container,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col ,Table} from 'reactstrap';
import classnames from 'classnames';
// import ImportantDates from './ImportantDates';



export default class SingleJobTab extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };

        console.log("inside singlejobtab ",this.props);

      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }


    render(){
      let importantDates = this.props.data.importantdates_set.map((val)=>{
        return(
          <tr>
              <th style={{display:'-webkit-inline-box'}}>{val.text}</th>
              <td style={{display:'-webkit-inline-box'}} className='' >{val.content}</td>
          </tr>
        )
      })

      let application_fees = this.props.data.applicationfee_set.map((val)=>{
        return(
          <tr>
              <th style={{display:'-webkit-inline-box'}}>{val.text}</th>
              <td style={{display:'-webkit-inline-box'}} className='' >{val.content}</td>
          </tr>
        )
      })

      let eligibility = this.props.data.eligibility_set.map((val)=>{
        return(
          <tr>
              <th style={{display:'-webkit-inline-box'}}>{val.text}</th>
              <td style={{display:'-webkit-inline-box'}} className='' >{val.content}</td>
          </tr>
        )
      })

      let age_limit = this.props.data.agelimit_set.map((val)=>{
        return(
          <tr>
              <th style={{display:'-webkit-inline-box'}}>{val.text}</th>
              <td style={{display:'-webkit-inline-box'}} className='' >{val.content}</td>
          </tr>
        )
      })

      let vacancy_details = this.props.data.vacancydetail_set.map((val)=>{
        return(
          <tr>
              <th style={{display:'-webkit-inline-box'}}>{val.text}</th>
              <td style={{display:'-webkit-inline-box'}} className=''>{val.content}</td>
          </tr>
        )
      })


        return(
            <Container>
                    <Nav tabs className="tablink">
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                        >
                        important Dates
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                        >
                        Application Fees
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}
                        >
                        Eligibility
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '4' }) }
                        onClick={() => { this.toggle('4'); }}
                        >
                       Age Limits
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '5' })}
                        onClick={() => { this.toggle('5'); }}
                        >
                       Vacancy Details
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Table striped>
                          <tbody>
                                {importantDates}
                          </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="2">
                      <Table striped>
                          <tbody>
                                {application_fees}
                          </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="3">
                      <Table striped>
                          <tbody>
                                {eligibility}
                          </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="4">
                      <Table striped>
                          <tbody>
                                {age_limit}
                          </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId="5">
                      <Table striped>
                          <tbody>
                                {vacancy_details}
                          </tbody>
                      </Table>
                    </TabPane>
                    </TabContent>
                </Container>
        )
    }
}
