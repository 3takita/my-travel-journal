import React from "react";

export default function Journal(props) {
  return (
    <div className="journal">
      <img src={`../images/${props.img}`} className="journal-img" alt="pix" />
      <div className="jounal-info">
        <img
          src="../images/location-icon.png"
          className="journal-loc"
          alt="loc"
        />
        <b>
          <span className="loca">{props.location}</span>
        </b>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h1>{props.title}</h1>
        <p>
          <b>
            <span className="bold">
              {props.startDate} - {props.endDate}
            </span>
          </b>
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
