import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './LineGraph.css';

const LineGraph = () => {
  const [covidData, setCovidData] = useState([]);

  const calculateNewCases = (totalCasesData) => {
    const dates = Object.keys(totalCasesData);
    const newCasesData = [];
    for (let i = 1; i < dates.length; i++) {
      const date = dates[i];
      const newCases = totalCasesData[date] - totalCasesData[dates[i - 1]];

      newCasesData.push({
        name: formatDate(date),
        cases: newCases,
      });
    }
    return newCasesData;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=280');
        const data = response.data;
        // Process the data to calculate daily new cases
        const chartData = calculateNewCases(data.cases);
        setCovidData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  const formatYAxisTick = (value) => {
    // Divide the value by 1000 and format it as "k"
    return `${value / 1000}k`;
  };

  const formatTooltip = (value) => {
    // Format the value with a thousands separator
    return value.toLocaleString();
  };


   // Helper function to format the date to "Mon YY" format with the first letter capitalized
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthAbbreviation = date.toLocaleString('default', { month: 'short' });
    const yearLastTwoDigits = date.getFullYear().toString().slice(-2);
    return `${monthAbbreviation.charAt(0).toUpperCase()}${monthAbbreviation.slice(1)} ${yearLastTwoDigits}`;
  };

  return (
    <div className="line">
         <AreaChart width={390} height={350} data={covidData}>
        <CartesianGrid />
        <XAxis
          dataKey="name"
          interval={30}
         angle={-25} // Rotate X-axis labels by -45 degrees
          textAnchor="end" // Anchor text at the end of the tick
        />
        <YAxis tickFormatter={formatYAxisTick} domain={['auto', 'auto']} />
        <Tooltip formatter={formatTooltip} />
        <Area type="monotone" dataKey="cases" stroke="red" fill="orange" />
      </AreaChart>
    </div>
  );
};

export default LineGraph;
