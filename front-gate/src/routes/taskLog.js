import { index, newTask, getTask, updateTask, deleteTask } from "../controllers/taskLog.js";
import PromiseRouter from "express-promise-router";

export const router = PromiseRouter()


router.get('/', index)
router.post('/', newTask)
router.get('/:taskId', getTask)
router.put('/:taskId', updateTask)
router.delete('/:taskId', deleteTask)


