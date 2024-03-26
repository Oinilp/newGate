import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:3000/app'
})

export const getAllTasks = () =>  taskApi.get('/')

export const getTask = (id) =>  taskApi.get(`/${id}/`)


export const createTask = (task) => axios.post('http://localhost:3000/app/', task)



export const deleteTask = (id) => taskApi.delete(`/${id}`)

export const updateTask = (id, task) => taskApi.put(`/${id}`, task)

