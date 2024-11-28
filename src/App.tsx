import React, {ChangeEvent, useState} from 'react';

import './App.css';

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    let [tasks, setTasks] = React.useState<TaskProps[]>([
        {id: 1, title: 'Task 1', isDone: false},
        {id: 2, title: 'Task 2', isDone: true},
        {id: 3, title: 'Task 3', isDone: false},
        {id: 4, title: 'Task 4', isDone: false},
    ]);

    let [title, setTitle] = useState<string>('');

    const RemoveTask = (id: number) => {
        const Remtasks = tasks.filter((task) => task.id !== id);
        setTasks(Remtasks);
    }

    const OnChangeHundler = (e: ChangeEvent<HTMLInputElement>) => {

        setTitle(e.currentTarget.value);
    }

    const AddTask = () => {
        if (title.trim() !== '') {
            let NewTask: TaskProps = {
                id: tasks.length + 1,
                title: title,
                isDone: false,

            };
            setTasks([NewTask, ...tasks])
            setTitle('')
        }

    }

    const TogleStatus =(id: number) => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, isDone: !task.isDone} : task
        ))


        };




    return (
        <div className="App">
            <h2>What to learn</h2>
            <input type="text" value={title} onChange={OnChangeHundler}/>
            <button onClick={AddTask}>+</button>
            <ul>
                {tasks.map((task) =>
                    <li key={task.id}>
                        <input type={'checkbox'} checked={task.isDone} onChange={()=>TogleStatus(task.id)}></input>
                        <p>{task.title}</p>
                        <button onClick={() => RemoveTask(task.id)}>remove</button>
                    </li>)}

            </ul>
        </div>
    );
}

export default App;
