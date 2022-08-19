import React, { useEffect, useState, useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import ChartContext from './Context/chartContext';

function LineChart() {

  const [xAxis,setXaxis] = useState();
  const [yAxis,setYaxis] = useState();
  const ctx = useContext(ChartContext);

  useEffect(() => {
    if(ctx.xaxis === "Time"){
      setYaxis([10,20,30,40,50,60,80,90])
    }
    if(ctx.xaxis === "Speed"){
      setYaxis([50, 51, 35, 11, 49, 62, 69, 91, 148])
   }
   if(ctx.xaxis === "Distance"){
     setYaxis([10, 40, 25, 51, 45, 67, 72, 91, 141])
   }
 
   if(ctx.yaxis === "Speed"){
     setXaxis([50, 51, 35, 11, 49, 62, 69, 91, 148])
   }
   if(ctx.yaxis === "Distance"){
    setXaxis([10, 40, 25, 51, 45, 67, 72, 91, 141])
  }
  if(ctx.yaxis === "Time"){
    setXaxis([10,20,30,40,50,60,80,90])
  }
 
   }, [ctx]); 
  
  
  const series= [{
        name: "Distance",
        data: xAxis
    }],
    options= {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: `${ctx.yaxis} ${ctx.xaxis} graph`,
        align: 'center'
      },
      grid: {
        row: {
          colors: ['red', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: yAxis,
      }
    }

  return (
    <div className="LineCharts">
      <ReactApexChart options={options} series={series} type="line" height={500} width={700}/>
    </div>
  );
}

export default LineChart;
