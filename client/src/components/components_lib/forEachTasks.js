const forEachTasks = (newSeries, thisState) => {

    fetch("http://localhost:5600/api/task")
        .then(res => res.json())
        .then(
            (result) => {
                thisState.setState({
                    isLoaded: true,
                    tasks: result.tasks
                });


                // Каждое полученное с сервера задание
                // преобразуем в нужный для апекса формат
                // и пушим в массив данных

                // По всей видимости, массив tasks будет в нужном нам виде только во время выполнения fetch,
                // иначе я не могу объяснить, почему после выхода отсюда мы не можем также проитеррировать
                // this.state.tasks и заполнить this.state.series нужными нам данными. Загадка..............

                thisState.state.tasks.forEach((task) => {

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

                thisState.setState({
                    series: newSeries
                });

            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                thisState.setState({
                    isLoaded: true,
                    error
                });
            }
        );
}

export default forEachTasks;