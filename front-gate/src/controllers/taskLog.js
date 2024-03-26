import taskLog from "../models/taskLog.js";

export const index = async (req, res, next) => {
    
    try {
        const taskL = await taskLog.find({})
        res.status(200).json(taskL)  
    } catch (e) {
        return e
    }
}

export const newTask = async (req, res, next) =>{
    try {
        const task = req.body
        const {app} = req.params

        console.log(':v', task)
        await new taskLog({
            title: task.title,
            description: task.description,
            creationDate: new Date(),
            //subtasks:
        }).save()
        
        res.status(201).send('OK')
    } catch (e) {
        console.log(e)
        res.status(404).send(e).end()
    }
}


export const getTask = async(req, res, next) => {
    const {taskId} = req.params
    const task = await taskLog.findById(taskId)
    console.log(`Error ${task._id} - ${task.data}`)
    res.status(200).json(task)
}

export const updateTask = async(req, res, next) => {
    const {taskId} = req.params
    const task = req.body
    console.log(task)
    await taskLog.findByIdAndUpdate(taskId, task)
    res.status(200).json(task)
}

export const deleteTask = async(req, res, next) => {
    const {taskId} = req.params
    await taskLog.findByIdAndDelete(taskId)
    console.log(`Tarea ${taskId} eliminada`)
    res.status(200).json(taskId)
}

