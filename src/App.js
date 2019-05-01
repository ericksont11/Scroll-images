import React, { Component } from "react";
import clouds from "./images/clouds.jpg";
import iceland from "./images/iceland.jpg";
import japan from "./images/japan.jpg";
import portugal from "./images/portugal.jpg";
import chile from "./images/chile.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Text from "./Text";
import API from "./utils/API"

class App extends Component {

  state = {
    image: clouds,
    count: 0
  }


  componentDidMount() {
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      this.setState({ image: image });
    })
  }

  handleIncrement = () =>{
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count)
    API.getImage().then(res => {
      const image = res.data.photos.photo[this.state.count].url_l
      this.setState({ image: image });
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
        />
        <button className="btn btn-primary">
            Increment
        </button>
      </div>
    );
  }
}

export default App;
