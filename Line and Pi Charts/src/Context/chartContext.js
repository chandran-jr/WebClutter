import { createContext, React } from "react";
import { useState } from "react/cjs/react.development";


const ChartContext = createContext({
    xaxis:'',
    yaxis: '',
    line: true,
    setXaxis:()=>({}),
    setYaxis:()=>({}),
    setLine:()=>({})
})


export const ChartContextProvider = (props)=>{
    const [xaxis,setXaxis]=useState('');
    const [yaxis,setYaxis]=useState('');
    const [line,setLine]=useState(true);


return(
    <ChartContext.Provider
        value={{
        xaxis,
        yaxis,
        setXaxis,
        setYaxis,
        line,
        setLine
        }}
    >
        {props.children}
    </ChartContext.Provider>
)}

export default ChartContext;