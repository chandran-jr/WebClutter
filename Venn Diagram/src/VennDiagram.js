import React, { useEffect } from 'react';
import * as d3 from "d3";
import * as venn from "venn.js";
import './VennDiagram.css';

function VennDiagram({aVal,bVal,abVal, outVal}) {

    useEffect(() => {
        const sets = [
          { sets: ['A'], size: aVal, label: 'A'},
          { sets: ['B'], size: bVal, label: 'B'},
          { sets: ['A', 'B'], size: abVal },
        ];
    
        let chart = venn.VennDiagram();
        d3.select("#venn").datum(sets).call(chart);
      }, [aVal,bVal,abVal]);

    return (
        <div className="VennDiagram">
            <div className="noneval">
            <h2>{outVal}</h2>
          </div>

          <div id="venn">
          </div>
        </div>
    )
}

export default VennDiagram
