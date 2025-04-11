import styles from "./Message.module.css"
import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"

const Message = () => {
    const todoItems = useContext(TodoItemsContext)
    return todoItems.length === 0 && <h1 className={styles.message }>Enjoy Your Day</h1>
}

export default Message