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
    longitude: "",
    temp: "",
    weather: "",
    date: new Date(),
  }


  componentDidMount() {
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
    console.log(this.state.src)
    this.setState({ count: this.state.count + 1 });
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      const latitude = res.data.photos.photo[this.state.count].latitude
      const longitude = res.data.photos.photo[this.state.count].longitude
      API.getWeather(latitude, longitude).then(res => {
        console.log(res.data.main.temp)
        let weather = res.data.weather[0].description
        weather = weather.charAt(0).toUpperCase() + weather.slice(1);
        const temp = Math.round(res.data.main.temp * 9/5 - 459.67)+"°F"
        console.log(temp)
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
          temp={this.state.temp}
          weather={this.state.weather}
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
        />
        <button className="btn btn-primary">
            Increment
        </button>
      </div>
    );
  }
}

export default App;
