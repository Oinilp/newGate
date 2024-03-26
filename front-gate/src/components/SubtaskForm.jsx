import {FormControl, Input, Button,Textarea, Flex, Checkbox} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { updateTask, getTask } from '../ api/task.api.js'
import {toast} from 'react-hot-toast'
import { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'





function SubtaskForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { register, handleSubmit, formState:{errors}, setValue } =useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
    
        //await updateTask(params.id, data)  
        console.log(data.subtasks)
        toast.success('Tarea actualizada',{
            position: 'bottom-right',
            style: {
            background: '#49beaa',
            color:'antiquewhite',
            fontFamily: 'sans-serif'
            }
        })  
        
        //navigate('/')
      })

      useEffect(() => {
        async function loadTask(){
                
          if(params.id){
            console.log('Getting :v')
            const {data: {title, description, done, subtasks}} = await getTask(params.id)
            
            setValue('title', title )
            setValue('description', description )
            setValue('done', done )
            setValue('subtasks', subtasks )
          }
        }
        loadTask()
      }, [])


  return (

    <FormControl>
        <form >
          <Flex flexDirection={'column'} >
            <Input mb='10px'  type="text" placeholder="title" />
            
            {errors.title && <span>Campo requerido</span> }
            <Textarea rows="3" placeholder="description" ></Textarea>
            {errors.description && <span>Campo requerido</span> }
            <Checkbox placeholder="Done" >Tarea terminada</Checkbox>
          </Flex>
          <Flex mt={'20px'} mb={'10px'} justifyContent={'space-evenly'}>
            <Button type='submit' colorScheme='blue' onClick={onSubmit} >Guardar</Button>
          </Flex>
        </form>
    </FormControl>
  )
}

export default SubtaskForm