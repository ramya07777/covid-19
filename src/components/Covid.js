import React from 'react';
import "./Covid.css";
import Map from './Map';
import Infobox from './Infobox';
import { useEffect, useState } from "react";
import Table from './Table';
import { sortData, prettyPrintStat } from './Util';
import LineGraph from './LineGraph';



function Covid() {
    const [countries, setCountries] = useState([]);
    const [update, setUpdate] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [center, setCenter] = useState([34.80746, -40.4796]);  
  const [mapcountries, setMapcountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

    useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/all")
   .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    })
    },[]
    )
    

    useEffect(() => { 
        const getCountriesData = async () => {
          await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) => {
            const country = data.map((x) => (
              {
                name: x.country,//united states, united kingdom
              value: x.countryInfo.iso2// uk, usa,ind
              }
            ));
            const sdata = sortData(data);
            setTableData(sdata);
            setCountries(country);
            setMapcountries(data);
          })
        }
        getCountriesData();
          }
          ,[])


          const updateChange = async (e) => {
            const countrycode = (e.target.value);
            setUpdate(countrycode);
            const url =
            countrycode === "WorldWide"
              ? "https://disease.sh/v3/covid-19/all"
              : `https://disease.sh/v3/covid-19/countries/${countrycode}`;
            
            await fetch(url)
            .then((response) => response.json())
            .then((data) => {
              setUpdate(countrycode);
            
              setCountryInfo(data);
            
              if (countrycode !== "WorldWide") {
                setCenter([data.countryInfo.lat, data.countryInfo.long]);
                
              } else {
                // Set the map back to the initial center and zoom for worldwide view
                setCenter({ lat: 34.80746, lng: -40.4796 });
              }
            });
            
          };
            
             // https://disease.sh/v3/covid-19/countries
            //https://disease.sh/v3/covid-19/all
                      
  return (
    <div className='covid'>
  <div className='covid__left'>
  <div className='covid__header'>
  
<h1 className='head'>Covid-19 Tracker</h1>
  <select className='select' value={update} onChange={updateChange}>
 <option value="WorldWide">WorldWide</option>
      {countries.map((coun) => (
        <option  value={coun.value}>
{coun.name}
</option>
     ))}
  
  </select>
    
     </div>
     <div className='covid__status'>
   <Infobox 
  onClick={(e) => setCasesType("cases")}
   title="coronovirus" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)} /> 
   <Infobox 
     onClick={(e) => setCasesType("recovered")}
   title="recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)} /> 
   <Infobox
    onClick={(e) => setCasesType("deaths")}
    title="deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)} /> 
   </div>
   <Map 
      casesType={casesType}
   center={center} countries={mapcountries} />
   </div>
   <div className='covid__right'>
<div className='covid__text'>
  <h3>Live Cases by Country</h3>
  <Table tablecountry={tableData} />
    <h3 className='world'>Worldwide new cases</h3>
    <LineGraph />
   </div>

   </div>
  </div>
  );
}

export default Covid;