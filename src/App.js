import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import GraphicDesign from "./components/GraphicDesign";
import Illustrantion from "./components/Illustration";
import Loading from "./components/Loading";
import Banner from "./components/Banner";
import TextEffect from "./components/TextEffect";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Package from "./components/Package";
import Uidesign from "./components/UIdesign";

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setLoading();
    }, 2500);
  }

  setLoading = () => {
    this.setState({
      isLoading: false,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <>
            <Navbar />
            <Header />
            <Aboutme />
            <Skills />
            <Product />
            <Uidesign />
            <GraphicDesign />
            <Banner />
            <Package />
            <Illustrantion />
            <TextEffect />
            <Contacts />
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
