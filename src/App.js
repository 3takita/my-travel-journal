import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
import data from "./data";
import Journal from "./Journal";

export default function App() {
  const journals = data.map((item) => {
    return (
      <Journal
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        img={item.coverImg}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {journals}
    </div>
  );
}
