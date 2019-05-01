import React, { Component } from "react";
import clouds from "./images/clouds.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Text from "./Text";
import API from "./utils/API"
require('dotenv').config()

class App extends Component {

  state = {
    image: clouds,
    count: 0,
    latitude: "",
    longitude: ""
  }


  componentDidMount() {
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      const latitude = res.data.photos.photo[this.state.count].latitude
      const longitude = res.data.photos.photo[this.state.count].longitude
      this.setState({ 
        image,
        latitude,
        longitude
       });
    })
  }

  handleIncrement = () =>{
    this.setState({ count: this.state.count + 1 });
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      const latitude = res.data.photos.photo[this.state.count].latitude
      const longitude = res.data.photos.photo[this.state.count].longitude
      this.setState({ 
        image,
        latitude,
        longitude
       });
       console.log(this.state.latitude)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Welcome to Tripster"
          subtitle={Text.intro}
          dark={true}
          id="section1"
          section="section2"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <Section
          title="Add your trips"
          subtitle={Text.trips}
          dark={true}
          id="section2"
          section="section3"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <Section
          title="Customize your widgets"
          subtitle={Text.widgets}
          dark={true}
          id="section3"
          section="section4"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <Section
          title="For more features check out the Premium version"
          subtitle={Text.premium}
          dark={true}
          id="section4"
          section="section5"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <Section
          title="Paradise Awaits"
          subtitle={Text.download}
          dark={true}
          id="section5"
          section="section1"
          background={this.state.image}
          button={"DOWNLOAD"}
          handleIncrement={this.handleIncrement}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <button className="btn btn-primary">
            Increment
        </button>
      </div>
    );
  }
}

export default App;
