import {useNavigate} from 'react-router-dom'
import {Card, CardBody, Heading, Text, Progress , Flex} from '@chakra-ui/react'
import { DelButton } from './delButton'
import { ProgresBar } from './ProgresBar'
import { useProgress } from '../hooks/useProgress'




function TaskCard({task}) {

  const navigate = useNavigate()

  let progreso = useProgress(task?.subtasks)

  if (isNaN(progreso)) {
    progreso = 0
}

  
  return (
    <Card 
    mb='10px'
    boxShadow='2xl'
    bg={task.done==true ? '#606c38' : '#e9d8a6'}
    w={'100vh'}
    borderRadius={0}
    mt={'5vh'}
    
    
    >
      <Flex >
      <CardBody  onClick={() => {navigate(`/tasks/${task._id}`)}}>
        <Heading pb={5} color={task.done==true ? '#fefae0' : 'black'} as='h1'>{task.title}</Heading>
        <Text color={task.done==true ? '#fefae0' : 'black'} >{task.description}</Text>
      </CardBody>
            
      <DelButton id={task?._id} color='red' />
      </Flex>
      <ProgresBar data={progreso} />
    </Card>
  )
}

export default TaskCard