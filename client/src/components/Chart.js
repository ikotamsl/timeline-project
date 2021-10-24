import React from 'react';
import Chart from "react-apexcharts";
import Form from "./Form";

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            error: null,
            isLoaded: false,
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
                },
                legend: {
                    show: false
                }
            }
        }
    }


    updateChartFromForm = async (data) => {
        this.setState({
            series: data
        });
    }

    componentDidMount() {

        let newSeries = []; // Переменная обновлённого массива с данными по заданиям

        fetch("http://localhost:5600/api/task")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tasks: result.tasks
                    });


                    // Каждое полученное с сервера задание
                    // преобразуем в нужный для апекса формат
                    // и пушим в массив данных

                    // По всей видимости, массив tasks будет в нужном нам виде только во время выполнения fetch,
                    // иначе я не могу объяснить, почему после выхода отсюда мы не можем также проитеррировать
                    // this.state.tasks и заполнить this.state.series нужными нам данными. Загадка..............

                    this.state.tasks.forEach((task) => {

                        const dbTask = {
                            data: [
                                {
                                    x: task.taskname,
                                    y: [
                                        new Date(task.begindate).getTime(),
                                        new Date(task.enddate).getTime()
                                    ]
                                }
                            ]
                        }
                        newSeries.push(dbTask);
                    });

                    // Обновляем массив данных диаграммы данными из БД

                    this.setState({
                        series: newSeries
                    });

                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );


    }

    render () {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
                <Form updateChartFromForm={this.updateChartFromForm} series={this.state.series} />
            </div>
        )
    }
}
export default ChartComponent;