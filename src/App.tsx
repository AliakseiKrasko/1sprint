import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import './App.css';

type FilterValueType = 'all' | 'active' | 'complited';

type TaskProps = {
    id: number;
    title: string;
    isDone: boolean;
};

function App() {
    const [tasks, setTasks] = useState<TaskProps[]>([
        { id: 1, title: 'Task 1', isDone: false },
        { id: 2, title: 'Task 2', isDone: true },
        { id: 3, title: 'Task 3', isDone: false },
        { id: 4, title: 'Task 4', isDone: false },
    ]);

    const [title, setTitle] = useState<string>('');
    const [filter, setFilter] = useState<FilterValueType>('all');

    const removeTask = (id: number) => {
        const remainingTasks = tasks.filter((task) => task.id !== id);
        setTasks(remainingTasks);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const createTask = () => {
        if (title.trim() !== '') {
            const newTask: TaskProps = {
                id: Date.now(),
                title: title.trim(),
                isDone: false,
            };
            setTasks([newTask, ...tasks]);
            setTitle('');
        }
    };

    const addTask = () => {
        createTask();
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            createTask();
        }
    };

    const toggleStatus = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        ));
    };

    const getFilteredTasks = (): TaskProps[] => {
        return tasks.filter((task) => {
            if (filter === 'active') return !task.isDone;
            if (filter === 'complited') return task.isDone;
            return true; // 'all'
        });
    };

    const filteredTasks = getFilteredTasks();

    return (
        <div className="App">
            <h2>What to learn</h2>
            <input
                type="text"
                value={title}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addTask}>+</button>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.isDone}
                            onChange={() => toggleStatus(task.id)}
                        />
                        <span>{task.title}</span>
                        <button onClick={() => removeTask(task.id)}>remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('complited')}>Complited</button>
        </div>
    );
}

export default App;
