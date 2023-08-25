
import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import "./Map.css";


const casesTypeColors = {
  cases: {
    hex: "#CC1034",
     multiplier: 100,
  },
  recovered: {
    hex: "#7dd71d",
      multiplier: 150,
  },
  deaths: {
    hex: "#fb4443",
        multiplier: 300,
  },
};



export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";  

export const sortData = (data) => {
    const sortedData = [...data];

 return   sortedData.sort((a, b) => 
       (a.cases > b.cases ? -1: 1) 
 )

};


export const showDataMap = (data, casesType = "cases") => 
           data.map((country) =>(
                
           <Circle
              key={country.country}
           center={[country.countryInfo.lat, country.countryInfo.long]}
           color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
          }   >
         
                  <Popup>
            <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info__name">{country.country}</div>
          <div className="info__confirmed">
            cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info__recovered">
            recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info__deaths">
            deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
            </Popup>
          </Circle> 
   
       ));   
