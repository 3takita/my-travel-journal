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
        <span>{props.location}</span>
        <a href="View on Google maps">{props.googleMapsUrl}</a>
        <h1>{props.title}</h1>
        <p>
          <span className="bold">
            {props.startDate}-{props.endDate}
          </span>
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
