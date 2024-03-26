
export const useProgress = (data) => {
    
  const totalSubTasks = Object.keys(data).length
  let subTaskDone = 0

  for (const subTask of data) {
    if(subTask.done == true){
      subTaskDone++
    }
  }

  let progreso = (subTaskDone * 100) / totalSubTasks

  return progreso
}
