import React, { Component } from 'react';
import Loading from './Loading';

class Home extends Component {
    render() {
        document.title = "SpiceStory Restaurant";
        return (
            <div>
      <img src="assets/images/Home.jpg" alt="Restaurant" width="2200" height="600" />
            </div>
        );
    }

}

export default Home;