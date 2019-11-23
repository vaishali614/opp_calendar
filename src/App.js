import React, { Component } from 'react';
import Header from './components/layout/Header';
import Title from './components/layout/Title';
import Section from './components/layout/Section';
import List from './components/List';
import Hack from './components/Hack';
import Scholar from './components/Scholar';
import Conf from './components/Conf';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    list: [
      {
        "albumId": 1,
        "id": 1,
        "title": "Internship 1",
        "jobTitle": "Software Developer Intern",
        "deadline": "Nov 30, 2019",
        "location": "New Delhi",
        "url": "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "Internship 2",
        "jobTitle": "Web Developer Intern",
        "deadline": "Nov 30, 2019",
        "location": "New Delhi",
        "url": "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "Internship 3",
        "deadline": "Nov 30, 2019",
        "location": "New Delhi",
        "jobTitle": "Android Developer Intern",
        "url": "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "Internship 4",
        "jobTitle": "Content Writer Intern",
        "deadline": "Nov 30, 2019",
        "location": "New Delhi",
        "url": "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "Internship 5",
        "jobTitle": "Data Analyst Intern",
        "deadline": "Nov 30, 2019",
        "location": "New Delhi",
        "url": "https://images.pexels.com/photos/163032/office-pen-calculator-computation-163032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
    ],

    hack: [
      {
        "albumId": 1,
        "id": 6,
        "title": "Hackathon 1",
        "duration": "Dec 9, 2019 - Dec 10, 2019",
        "deadline": "Nov 30, 2019",
        "location": "Delhi Technological University",
        "url": "http://dtu.ac.in/Web/quick_links/DTU_Gallery/Images/Img5.jpg"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "Hackathon 2",
        "duration": "Dec 15, 2019 - Dec 16, 2019",
        "deadline": "Dec 5, 2019",
        "location": "Netaji Subhash University of Technology",
        "url": "https://images.shiksha.com/mediadata/images/1551151713phpS45Q6A.jpeg"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "Hackathon 3",
        "duration": "Dec 28, 2019 - Dec 29, 2019",
        "deadline": "Dec 15, 2019",
        "location": "Maharaja Agrasen Institute of Technology",
        "url": "https://getmyuni.azureedge.net/college-image/big/maharaja-agrasen-institute-of-technology-mait-new-delhi.jpg"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "Hackathon 4",
        "duration": "Jan 5, 2020 - Jan 6, 2020",
        "deadline": "Dec 25, 2019",
        "location": "Indira Gandhi Delhi Technological University",
        "url": "https://images.shiksha.com/mediadata/images/1562591582phpMFzFbE.jpeg"
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "Hackathon 5",
        "duration": "Jan 10, 2020 - Dec 11, 2020",
        "deadline": "Jan 5, 2020",
        "location": "Indraprasth Institute of Information Technology",
        "url": "https://qt-01.gumlet.com/freepressjournal%2F2019-11%2F6dfa321b-4223-4751-a407-4837b9655cfa%2Fiiit_delhi_placements_2019_student.jpg?rect=0%2C0%2C760%2C428&w=1000"
      },
    ],

    scholar: [
      {
        "albumId": 1,
        "id": 1,
        "title": "Scholarship 1",
        "scholarTitle": "STFC India Meritorious Scholarship Programme",
        "deadline": "Nov 30, 2019",
        "url": "https://scontent-yyz1-1.cdninstagram.com/vp/aa3f5cee1b6dfcf5ad50a8ae29c9eda6/5E4C7327/t51.2885-15/sh0.08/e35/s640x640/72064793_2118113338492411_2036102791489058499_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=107"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "Scholarship 2",
        "scholarTitle": "Technip India Limited Scholarship Program",
        "deadline": "Dec 10, 2019",
        "url": "https://g.foolcdn.com/art/companylogos/square/fti.png"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "Scholarship 3",
        "scholarTitle": "Fair and Lovely Career Foundation Scholarship",
        "deadline": "Dec 15, 2019",
        "url": "https://sarkariresult.desi/wp-content/uploads/2019/06/Fair-Lovely-Career-Foundation-Nepal-Scholarship-apply-now-300x287.jpg"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "Scholarship 4",
        "scholarTitle": "LIC HFL Vidyadhan Scholarship",
        "deadline": "Dec 31, 2019",
        "url": "https://www.freshersnow.com/wp-content/uploads/2018/08/LIC-HFL-logo.png"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "Scholarship 5",
        "scholarTitle": "Keep India Smiling Foundational Scholarship Programme",
        "deadline": "Jan 20, 2020",
        "url": "https://www.scholarshipsinindia.com/wp-content/uploads/keep-india-smiling-foundational-scholarship-program.jpg"
      },
    ],

    conf: [
      {
        "albumId": 1,
        "id": 6,
        "title": "Conference 1",
        "confTitle": "RW- 717th International Conference on Power Control and Embedded System (ICPCES)",
        "date": "Nov 24, 2019",
        "location": "Pune, India",
        "url": "http://researchworld.org/RESEARCHWORLD-INCLUDE-2018/images/pic2.jpg"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "Conference 2",
        "confTitle": "SARC-International Conference on Robotics, Machine Learning and Artificial Intelligence (ICRMLAI)",
        "date": "Nov 24, 2019",
        "location": "Mumbai, India",
        "url": "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/69635072_122421795454696_7153651975138888029_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=104&oh=7e2d6eade6f936919bda4b9f83b04ed7&oe=5DF1B2A0&ig_cache_key=MjEyOTU1Mjc0ODU0Nzg5ODgzMg%3D%3D.2"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "Conference 3",
        "confTitle": "IRAJ-International Conference on Robotics, Communication Technology, Electronics, and Electrical Engineering ICRRCTEEE",
        "date": "Nov 24, 2019",
        "location": "Bangalore, India",
        "url": "http://theconferenceworld.org/conf_album/2019-GALL-1573168076-WhatsApp%20Image%202019-11-03%20at%2014.23.59.jpeg"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "Conference 4",
        "confTitle": "IRAJ-International Conference on Advances in Mechanical, Civil, and Construction Engineering ICAMCCE",
        "date": "Nov 27, 2019",
        "location": "Hyderabad, India",
        "url": "http://theconferenceworld.org/conf_album/2019-GALL-1573168076-WhatsApp%20Image%202019-11-03%20at%2014.23.57.jpeg"
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "Conference 5",
        "confTitle": "ACN- International Conference on Recent Developments in Social Science and Business Management ICRDSSBM",
        "date": "Nov 28, 2019",
        "location": "Kolkata, India",
        "url": "https://image.isu.pub/190802025526-298ce07be0faba93a9e9d404cc9e3742/jpg/page_1.jpg"
      },
    ]
  }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(res => this.setState({ list: res.data }))
  // }

  render() {
    return (
      // <React.Fragment>
        <Router>
          <Header />
          <Title />
          <br></br>
          <div className="container">
            <Section />
            {/* <List list = {this.state.list} /> */}
            {/* <Hack hack = {this.state.hack} /> */}
            {/* <Scholar scholar = {this.state.scholar} /> */}
            {/* <Conf conf = {this.state.conf} />  */}

            <Route exact path='/' render={props => (
              <React.Fragment>
                <List list = {this.state.list} />
              </React.Fragment>
            )} />
            <Route exact path='/hackathon' render={props => (
              <React.Fragment>
                <Hack hack = {this.state.hack} />
              </React.Fragment>
            )} />
            <Route exact path='/scholarship' render={props => (
              <React.Fragment>
                <Scholar scholar = {this.state.scholar} />
              </React.Fragment>
            )} />
            <Route exact path='/conference' render={props => (
              <React.Fragment>
                <Conf conf = {this.state.conf} />
              </React.Fragment>
            )} />

          </div>
        </Router>
      // </React.Fragment>
    )
  }
}

export default App;
