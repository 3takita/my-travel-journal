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
        img={item.img}
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

/*
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}
*/
