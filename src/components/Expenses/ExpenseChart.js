import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart = (props) =>{
    return (
        <div>
            <Chart chartExpenses={props.chartData}></Chart>
        </div>
    )
    
}
export default ExpenseChart;