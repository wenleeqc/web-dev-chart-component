import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    render() {
        return (
            <div className="chart">
                <h1>Top 5 Sites Visited</h1>
                <Doughnut
                    data={this.props.chartData}
                    options={{}}
                />
            </div>
        )
    }
}

export default Chart;