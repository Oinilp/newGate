import { Button, Grid, Flex} from '@chakra-ui/react'
import {Formik, Form} from 'formik'
import { FormikFields } from '../components/FormikFields.jsx'
import { AcordionSubTask } from '../components/AcordionSubTask.jsx'
import { useTaskFormPage } from '../hooks/useTaskFormPage.js'
import { useProgress } from "../hooks/useProgress"

export function UserConfig() {
  
  const {onSubmit, initianValues, navigate, validate, params } = useTaskFormPage()
  const subtaskDone = useProgress(initianValues.subtasks)
 
  let disabled
  if(subtaskDone===100){
    disabled = false
  }else{
    disabled = true
  }
  
  return (

    <Grid mt={'5vh'}>
        <Formik validate={validate} enableReinitialize initialValues={initianValues} onSubmit={onSubmit} >
      {
        ({values}) => (
          <Form >
          <Grid borderRadius={5} padding={5} bg={'#e9d8a6'} gap={2} w={'100vh'}>
          <FormikFields borderColor={'#001219'} name='nombre' placeholder='nombre' label='nombre'/>  
          <FormikFields borderColor={'#001219'} name='cargo' placeholder='cargo' label='cargo'/>
          <FormikFields borderColor={'#001219'} name='id' placeholder='id' label='id'/>
          <FormikFields borderColor={'#001219'} name='correo' placeholder='correo' type="email" label='correo'/>
  
  
          <Flex justifySelf={'end'} gap={4}>
          <Button colorScheme='red' onClick={()=>{navigate('/')}}>Calcelar</Button>
          <Button colorScheme='teal' type='submit' >Guardar</Button>
  
          </Flex>
  
          </Grid>
  
        </Form>
        )
      }
    </Formik>
    </Grid>
    
    

  )
}