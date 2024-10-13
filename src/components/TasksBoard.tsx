import { TaskType } from "../App"
import { Task } from "./Task"

import TasksBoardstyles from "./TasksBoard.module.css";

interface TaskBoardProps {
  tasks: TaskType[];
  handleTaskCheck: (task: TaskType) => void;
  handleTaskDelete: (task: TaskType) => void;
}

export const TasksBoard = ({tasks, handleTaskCheck, handleTaskDelete}: TaskBoardProps) => {

  const tasksCount = () => tasks.length;

  const tasksCompleted = () => {
    return tasks.filter(task => task.checked).length;
  }

  return (
    <section>
        <TasksBoardHeader tasksCompleted={tasksCompleted()} tasksCount={tasksCount()} />
        <main className={TasksBoardstyles.tasks}>
          {tasks.map(task => (
            <Task key={task.value} task={task} handleTaskCheck={handleTaskCheck} handleTaskDelete={handleTaskDelete}/>
          ))}
        </main>
    </section>
  )
}

import TasksBoardHeaderstyles from "./TasksBoardHeader.module.css";
interface TasksBoardHeaderProps {
  tasksCount: number;
  tasksCompleted: number;
}

const TasksBoardHeader = ({tasksCount, tasksCompleted}: TasksBoardHeaderProps) => {
  return (
    <header className={TasksBoardHeaderstyles.taskHeader}>
      <span>
        <h1 className={TasksBoardHeaderstyles.createdTasks}>{"Tarefas criadas"}</h1>
        <span className={TasksBoardHeaderstyles.value}>
          {tasksCount}
        </span>
      </span>
      <span>
        <h1 className={TasksBoardHeaderstyles.completedTasks}>{"Concluídas"}</h1>
        <span className={TasksBoardHeaderstyles.value}>
          {`${tasksCompleted} de ${tasksCount}`}
        </span>
      </span>
    </header>
  )

}