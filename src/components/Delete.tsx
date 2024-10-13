import { Trash } from "@phosphor-icons/react"
import styles from "./Delete.module.css"

interface Props {
  onClick: () => void;
}

export const Delete = ({onClick}: Props ) => {
  return <Trash onClick={onClick} className={styles.delete} />
}