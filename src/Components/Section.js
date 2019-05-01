import React from "react";
import { Link } from "react-scroll";

export default function Section({ title, subtitle, dark, id, section, handleIncrement, button, background, latitude, longitude }) {

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <div className="after"  style = {{ backgroundImage: 'url(' + background + ')', 
            backgroundSize: '100% 100%'
          }}>
        </div>
        <h1 className="center">{title}</h1>
        <p className="center">{subtitle}</p>
        <div>
          <Link
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
          >
            <div className="continue" onClick={handleIncrement}>
              {button}
            </div>
          </Link>
          <h5 className="center">Latitude: {latitude} Longitude: {longitude}</h5>
        </div>
      </div>
    </div>
  );
}
