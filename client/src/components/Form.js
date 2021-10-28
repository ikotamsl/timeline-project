import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskName: '',
            beginDate: '',
            endDate: ''
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

        fetch("http://localhost:5600/api/task", {
            method: 'POST',
            body: JSON.stringify({
                taskname: this.state.taskName,
                begindate: this.state.beginDate,
                enddate: this.state.endDate,
                collaboratorId: 1
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(

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