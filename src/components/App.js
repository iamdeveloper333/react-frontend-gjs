import React, { Component } from "react";
import { Button ,Row,Col} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header';
import LatestJob from './LatestJob';
import AdmitCard from './AdmitCard';
import AllAdmitCards from './AllAdmitCards';
import AllResults from './AllResults';
import ExamResult from './ExamResult';
import JobCategory from './JobCategory';
import SearchResults from './SearchResults';
import Footer from './Footer';
import '../styles/App.css';
import AllJobs from './Alljobs/AllJobs';
import SingleJob from './SingleJob/SingleJob';
import {connect} from 'react-redux';
import LoginPage from "./LoginPage";
import AllBlogs from "./AllBlogs";
import Blogs from "./Blogs";
import Aptitude from './Aptitude';
import QuestionsPaper from "./QuestionsPaper"
import SavedBlogs from "./SavedBlogs";
import SavedJobs from "./SavedJobs";
import Reasoning from "./Reasoning";
// import English from './English';


const Home =()=>(
            <div>
         <Header/>  
         <LatestJob/>
         <Blogs/>
         <AdmitCard/>  
         <ExamResult/>  
         <Footer/>
         
                
            </div>
)

const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );

const App = () => (
    <Router>
      
      <div>
     
        {/* <Route exact path="/login" component={LoginPage}/> */}
        <Route exact path="/blogs" component={AllBlogs}/>
        <Route exact path="/savedblogs" component={SavedBlogs}/>
        <Route exact path="/savedjobs" component={SavedJobs}/>
        <Route exact path="/" component={Home}/>
        <Route path="/job/:cat/:state/:jobname/:id" component={SingleJob}/>
        <Route exact path="/alljobs" component={AllJobs}/>
        <Route exact path="/admitcards" component={AllAdmitCards}/>
        <Route exact path="/results" component={AllResults}/>
        <Route path="/search/:id" component={SearchResults}/>
        <Route exact path="/aptitude" component={Aptitude}/>
        <Route exact path="/aptitude/:id" component={QuestionsPaper}/>
{/* 
        <Route exact path="/english" component={English}/>
        <Route exact path="/english/:id" component={QuestionsPaper}/> */}

        <Route exact path="/reasoning" component={Reasoning}/>
        <Route exact path="/reasoning/:id" component={QuestionsPaper}/>
      </div>
    </Router>
  )



  function mapStateToProps({read,authUser}) {
    return {
        read,authUser
    }
}

export default connect(mapStateToProps)(App)
