import { useEffect, useState } from "react"
import { getAllTasks } from "../api/task.api.js"

export const useGetAllTask = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {

        async function loadTasks(){
        const res = await getAllTasks()
        
        setTasks(res.data)
        }
        loadTasks()
        
    },[])
  return {tasks}
}