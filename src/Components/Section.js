import React from "react";
import { Link } from "react-scroll";

export default function Section({ title, subtitle, dark, id, section, handleIncrement,
                                  temp, weather, button, background, latitude, longitude, count, marginTop }) {

  return (
    <div className={"section" + (dark ? " section-dark" : "")} style = {{ top: marginTop, position: "relative"}}>
      <div className="section-content" id={id} >
      <div className="after"  style = {{ backgroundImage: 'url(' + background + ')', 
            backgroundSize: '100% 100%'
          }}>
        </div>
        <div className="verticalCenter width70">
          <div className="center title">{title}</div>
          <p className="center">{subtitle}</p>
       
          <div>
            <Link
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <div className="continue" onClick={handleIncrement}>
                {button}
              </div>
            </Link>
            <p className="center">Latitude: {latitude}  Longitude: {longitude}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
