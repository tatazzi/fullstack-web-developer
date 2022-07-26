import * as React from "react";
import "./style.css";
import img from "../images/home-img.png";
import img2 from "../images/path.png";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Fullstack developer</title>
      <div className="nav-bar">
        <div className="nav-buttons">
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Projects</a>
          <a href="">Services</a>
        </div>
        <button className="button" onClick={() => alert("Contato feito")}>
          Contact
        </button>
      </div>
      <div className="container">
        <div className="title">
          <h1>Fullstack Web Developer</h1>
          <h3>Ailen Grimaldi</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Pellentesque in dui
            <br /> pellentesque, interdum nisi et.
          </span>
          <img src={img2} />
        </div>
        <div className="img">
          <img src={img} />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
