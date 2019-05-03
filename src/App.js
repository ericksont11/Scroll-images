import React, { Component } from "react";
import clouds from "./images/clouds.jpg";
import "./App.css";
import Section from "./Components/Section";
import Text from "./Text";
import API from "./utils/API"
import Cloud from "./images/cloud.png";
import scrollToElement from 'scroll-to-element'
require('dotenv').config()


class App extends Component {

  state = {
    image: clouds,
    count: 0,
    latitude: "",
    longitude: "",
    temp: "",
    weather: "",
    date: new Date(),
  }

  updateDimensions() {
    if(window.innerHeight < 10000) {
      if (this.state.count > 4) {
        const num = this.state.count % 5
        scrollToElement('#section'+(num + 1), {
          offset: 0,
          ease: 'out-bounce',
          duration: 1
        });
      } else {
        scrollToElement('#section'+(this.state.count+1), {
          offset: 0,
          ease: 'out-bounce',
          duration: 1
        });
      }
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      const latitude = res.data.photos.photo[this.state.count].latitude
      const longitude = res.data.photos.photo[this.state.count].longitude
      API.getWeather(latitude, longitude).then(res => {
        let weather = res.data.weather[0].description
        weather = weather.charAt(0).toUpperCase() + weather.slice(1);
        const temp = Math.round(res.data.main.temp * 9/5 - 459.67)+"°F"
        this.setState({ 
          image,
          latitude,
          longitude,
          weather,
          temp
        });
      })
    })
  }

  handleIncrement = () =>{

    const elem = document.getElementById("weatherBox");
    elem.style.visibility = 'hidden';
    this.setState({ count: this.state.count + 1 });
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      const latitude = res.data.photos.photo[this.state.count].latitude
      const longitude = res.data.photos.photo[this.state.count].longitude
      API.getWeather(latitude, longitude).then(res => {
        let weather = res.data.weather[0].description
        weather = weather.charAt(0).toUpperCase() + weather.slice(1);
        const temp = Math.round(res.data.main.temp * 9/5 - 459.67)+"°F"
        this.setState({ 
          image,
          latitude,
          longitude,
          weather,
          temp,
        });
      })
    })
  }

  handleVisible = () => {
      const elem = document.getElementById("weatherBox");
      if (elem.style.visibility === 'visible'){
        elem.style.visibility = 'hidden';
      } else {
        elem.style.visibility = 'visible';
      }
  }

  render() {
    return (
      <div className="App">
        <div id="weatherBox" style ={{ visibility:"hidden"}}>
            <div>
              <div className="center weatherText">Weather Conditions: {this.state.weather}</div>
              <div className="center weatherText">Temperature: {this.state.temp}</div>
          </div>
        </div>
        <img alt="Weather" id="cloud" src={Cloud} onClick={this.handleVisible}/>
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
          temp={this.state.temp}
          weather={this.state.weather}
          count={0}
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
          temp={this.state.temp}
          weather={this.state.weather}
          count={1}
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
          temp={this.state.temp}
          weather={this.state.weather}
          count={2}
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
          temp={this.state.temp}
          weather={this.state.weather}
          count={3}
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
          temp={this.state.temp}
          weather={this.state.weather}
          count={4}
        />
      </div>
    );
  }
}

export default App;
