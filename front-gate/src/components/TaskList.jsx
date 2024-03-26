import TaskCard from "./TaskCard"
import { useGetAllTask } from "../hooks/useGetAllTask"

function TaskList(props) {
  const {tasks} = useGetAllTask()
  const {tasq} = props


  

  
  

  return (
    <div>
        {tasq.tasq.map(task =>(
            <TaskCard key={task._id} task = {task}/>
        ))}
    </div>
  )
}

export default TaskList