import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskName: '',
            beginDate: '',
            endDate: '',
            series: this.props.series
        }
    }

    handleTaskNameChange = (event) => {
        this.setState({
            taskName: event.target.value
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
                    x: this.state.taskName,
                    y: [
                        new Date(this.state.beginDate).getTime(),
                        new Date(this.state.endDate).getTime()
                    ]
                }
            ]
        };

        this.setState({
            series: [...this.state.series, newTask]
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Название задачи</label>
                    <input value={this.state.taskName} onChange={this.handleTaskNameChange}/>

                    <label>Дата начала</label>
                    <input type="date" value={this.state.beginDate} onChange={this.handleBeginDateChange}/>

                    <label>Дата окончания</label>
                    <input type="date" value={this.state.endDate} onChange={this.handleEndDateChange}/>
                    <button type={'submit'} onClick={() => {this.props.updateChartFromForm(this.state.series)}}>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Form;