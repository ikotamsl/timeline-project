import React from 'react';
import Chart from "react-apexcharts";
import Form from "./Form";

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: '',
            beginDate: '',
            endDate: '',
            series: [
                {
                    data: [
                        {
                            x: 'Говно.',
                            y: [
                                new Date('2021-11-01').getTime(),
                                new Date('2021-12-01').getTime()
                            ]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'rangeBar'
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                xaxis: {
                    type: 'datetime'
                }
            }
        }
    }

    updateChartFromForm = (data) => {
        this.setState({
            series: data
        })
    }

    render () {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
                <Form updateChartFromForm={this.updateChartFromForm} series={this.state.series}/>
            </div>
        )
    }
}
export default ChartComponent;