import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createTask, updateTask, getTask } from '../api/task.api.js'
import { useToast } from '@chakra-ui/react'



export const useTaskFormPage = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const params = useParams()
  
    
    const onSubmit = async values => {
      
      if(params.id){
        //console.log(params.id)
        //console.log(values)
        await updateTask(params.id, values)  
        toast({
          title: 'Tarea Actualizada',
          status:'success',
          isClosable: true,
        })
      }else{
        await createTask(values)
        //console.log(data)
        toast({
          title: 'Tarea creada',
          status:'success',
          isClosable: true,
        })
      }
      navigate('/tasks')
      window.location.reload();
    }
   
    
  
    const [taskSelected, setTaskSelected] = useState({})
  
    const validate = (values) =>{
        const error = {}

        if(!values.title){
            error.title='Campo requerido'
        }

        if(!values.description){
            error.description='Campo requerido'
        }

        
        

        return error
    }
  
  
    useEffect(() => {
      async function loadTask(){
              
        if(params.id){
          //console.log('Getting data')
          const {data} = await getTask(params.id)
          setTaskSelected(data)
          
        }else{
            setTaskSelected({})
        }
      }
      loadTask()
    }, [params.id])
  
    const initianValues = {
  
      _id: taskSelected?._id  || '',
      title: taskSelected?.title || '',
      description: taskSelected?.description || '',
      subtask: taskSelected?.subtask || false,
      subtasks: taskSelected?.subtasks || [],
      done: taskSelected?.done || false,
  
    }
  return {
    params,
    navigate,
    onSubmit,
    initianValues,
    validate

  }
}
