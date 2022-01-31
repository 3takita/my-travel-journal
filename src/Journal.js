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
        <h1 className="Journal-title">{props.title}</h1>
        <p>
          <b>
            <span>
              <p className="time">
                {props.startDate} - {props.endDate}
              </p>
            </span>
          </b>
        </p>
        <p className="journal-desc">{props.description}</p>
      </div>
    </div>
  );
}
