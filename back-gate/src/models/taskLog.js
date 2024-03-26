import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const taskSchema = new Schema({
    _id:{
        type: String,
        default: uuidv4
    },
    title: String,
    description: String,
    subtask:{
        type:Boolean,
        default: false
    },
    done:{
        type:Boolean,
        default: false
    },
    subtasks:{
        type:Array,
        default:[]
    },
    creationDate: Date,
    updateDate: Date
})

export default model('tasklog', taskSchema)