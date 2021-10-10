import React from 'react';
import Chart from "react-apexcharts";

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

    handleTaskNameChange = (event) => {
        this.setState({
            collName: event.target.value
        })
    }

    handleBeginDateChange = (event) => {
        this.setState({
            beginDate: event.target.value
        });
    }

    handleEndDateChange = (event) => {
        this.setState({
            endDate: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            data: [
                {
                    x: this.state.collName,
                    y: [
                        new Date(this.state.beginDate).getTime(),
                        new Date(this.state.endDate).getTime()
                    ]
                }
            ]
        };

        this.setState({
            series: [...this.state.series, newTask]
        })
    }

    updateChart = () => {

    }

    render () {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
                <form onSubmit={this.handleSubmit}>
                    <label>Название задачи</label>
                    <input value={this.state.collName} onChange={this.handleTaskNameChange}/>

                    <label>Дата начала</label>
                    <input type="date" value={this.state.beginDate} onChange={this.handleBeginDateChange}/>

                    <label>Дата окончания</label>
                    <input type="date" value={this.state.endDate} onChange={this.handleEndDateChange}/>
                    <button type={'submit'}>Submit!</button>
                </form>
            </div>
        )
    }
}
export default ChartComponent;