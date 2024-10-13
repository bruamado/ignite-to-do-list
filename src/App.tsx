import './App.css'
import rocket from "./assets/rocket.svg"
import todo from "./assets/todo.svg"
import { TasksBoard } from './components/TasksBoard'
import { TaskForm } from './components/TaskForm'
import { useState } from 'react'

export interface TaskType {
 order: number;
 checked: boolean;
 value: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const onSubmit = (data: string) => {
    const order = tasks.length;
    const newTask = {order: order, checked: false, value: data};
    setTasks(state => [...state, newTask]);
  }

  const handleTaskCheck = (task: TaskType) => {
    const newTasks = tasks.map(taskN => {
      if (task.order === taskN.order && task.value === taskN.value) return {...taskN, checked: !taskN.checked};
      return taskN;
    })
    setTasks(newTasks);
  }

  const handleTaskDelete = (task: TaskType) => {
    const newTasksWithoutDeletedOne = tasks.filter(taskN => !(taskN.order === task.order && taskN.value === task.value));
    setTasks(newTasksWithoutDeletedOne);
  }


  return (
    <>
      <header className='header'>
        <img src={rocket} />
        <img src={todo} />
      </header>

      <main>
        <TaskForm onSubmit={onSubmit}/>
        <TasksBoard tasks={tasks} handleTaskCheck={handleTaskCheck} handleTaskDelete={handleTaskDelete}/>
      </main>
    </>
  )
}

export default App
