import React from "react";
import { Link } from "react-scroll";

export default function Section({ title, subtitle, dark, id, section, handleIncrement,
                                  temp, weather, button, background, latitude, longitude, src }) {

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <div className="after"  style = {{ backgroundImage: 'url(' + background + ')', 
            backgroundSize: '100% 100%'
          }}>
        </div>
        <h1 className="center">{title}</h1>
        <div className="width70">
          <p className="center">{subtitle}</p>
        </div>
        <div>
          <Link
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <div className="continue" onClick={handleIncrement}>
              {button}
            </div>
          </Link>
          <h5 className="center">Latitude: {latitude}  Longitude: {longitude}</h5>
          <h5 className="center">Weather Conditions: {weather}</h5>
          <h5 className="center">Temperature: {temp}</h5>
        </div>
      </div>
    </div>
  );
}
