import React, { useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ChartContext from './Context/chartContext';

function PiChart() {

  const [xaxis,setXaxis] = useState([11,15,18,20,15])
  const [yaxis,setYaxis] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May'])
  const ctx = useContext(ChartContext)

  useEffect(() => {
    if(ctx.xaxis === "Speed"){
      setXaxis([50, 51, 35, 11, 49])
    }
    if(ctx.xaxis === "Distance"){
     setXaxis([11, 40, 25, 51, 49])
   }
   if(ctx.xaxis === "Time"){
     setXaxis([17, 46, 28, 57, 42])
   }

   }, [ctx])

   const series =  xaxis,
            options = {
              chart: {
                type: 'donut',
              },
              labels: yaxis,
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'top'
                  }
                }
              }]
            }
    return (
        <div>
            <ReactApexChart options={options} series={series} type="donut" height={500} width={700} />
        </div>
    )
}

export default PiChart
