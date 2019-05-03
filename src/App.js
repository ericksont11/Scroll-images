import React, { Component } from "react";
import "./App.css";
import Section from "./components/section";
import PopUp from "./components/popup";
import API from "./utils/API"
import Cloud from "./utils/cloud.png"
import World from "./utils/world.png"
import scrollToElement from 'scroll-to-element'
require('dotenv').config()


class App extends Component {
  state = {
    image: "",
    count: 0,
    latitude: "",
    longitude: "",
    temp: "",
    weather: "",
    date: new Date(),
  }

  updateDimensions() {
    if(window.innerHeight) {
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
    scrollToElement('#section1', {
      offset: 0,
      ease: 'out-bounce',
      duration: 1
    });
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
    const weatherBox = document.getElementById("weatherBox");
    weatherBox.style.visibility = 'hidden';
    const locationBox = document.getElementById("locationBox");
    locationBox.style.visibility = 'hidden';
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

  handleWeatherVisible = () => {
    const locationBox = document.getElementById("locationBox");
    locationBox.style.visibility = 'hidden';

    const elem = document.getElementById("weatherBox");
    if (elem.style.visibility === 'visible'){
      elem.style.visibility = 'hidden';
    } else {
      elem.style.visibility = 'visible';
    }
  }

  handleLocationVisible = () => {
    const weatherBox = document.getElementById("weatherBox");
    weatherBox.style.visibility = 'hidden';

    const elem = document.getElementById("locationBox");
    if (elem.style.visibility === 'visible'){
      elem.style.visibility = 'hidden';
    } else {
      elem.style.visibility = 'visible';
    }
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <img alt="Weather" id="cloud" src={Cloud} onClick={this.handleWeatherVisible}/>
          <img alt="Location" id="world" src={World} onClick={this.handleLocationVisible}/>
        </div>
        <PopUp 
          id={"weatherBox"}
          datumType={"Weather"}
          secondDatumType={"Temp"}
          datum={this.state.weather}
          secondDatum={this.state.temp}
        />
        <PopUp 
          id={"locationBox"}
          datumType={"Latitude"}
          secondDatumType={"Latitude"}
          datum={this.state.latitude}
          secondDatum={this.state.longitude}
        />
        <img alt="Weather" id="cloud" src={Cloud} onClick={this.handleWeatherVisible}/>
        <img alt="Weather" id="world" src={World} onClick={this.handleLocationVisible}/>
        <Section
          title="TRIPSTER"
          dark={true}
          id="section1"
          section="section2"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          count={0}
        />
        <Section
          title="TRIPSTER"
          dark={true}
          id="section2"
          section="section3"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          count={1}
        />
        <Section
          title="TRIPSTER"
          dark={true}
          id="section3"
          section="section4"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          count={2}
        />
        <Section
          title="TRIPSTER"
          dark={true}
          id="section4"
          section="section5"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          count={3}
        />
        <Section
          title="TRIPSTER"
          dark={true}
          id="section5"
          section="section1"
          background={this.state.image}
          button={"CONTINUE"}
          handleIncrement={this.handleIncrement}
          count={4}
        />
      </div>
    );
  }
}

export default App;
