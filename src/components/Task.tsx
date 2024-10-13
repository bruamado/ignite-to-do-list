import { TaskType } from "../App"
import { CircleCheckbox } from "./CircleCheckbox"
import { Delete } from "./Delete"

import styles from "./Task.module.css";

interface TaskProps{
  task: TaskType;
  handleTaskCheck: (task: TaskType) => void;
  handleTaskDelete: (task: TaskType) => void;
};

export const Task = ({task, handleTaskCheck: handleTaskCheckOuter, handleTaskDelete: handleTaskDeleteOuter}: TaskProps) => {

  const handleTaskCheck = () => {
    handleTaskCheckOuter(task);
  }

  const handleTaskDelete = () => {
    handleTaskDeleteOuter(task);
  }

  return (
    <div className={styles.task}>
      <CircleCheckbox className={styles.buttons} checked={task.checked} onClick={handleTaskCheck} />
      <p data-order={task.order}>{task.value}</p>
      <Delete className={styles.buttons} onClick={handleTaskDelete} />
    </div>
  )
}