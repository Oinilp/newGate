import {AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent,
    AlertDialogOverlay, Button, useDisclosure, Box } from '@chakra-ui/react'
import {useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { deleteTask  } from '../api/task.api.js'




export function DiscButtonDel({color, text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const navigate = useNavigate()
    const params = useParams()
  
    return (
      <Box mt={'16px'}>
        <Button colorScheme={color} onClick={onOpen}>
          {text}
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                {text} tarea
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can not undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme={color} ml={3} onClick={async () => {
                    await deleteTask(params.id)
                        toast.success('Tarea eliminada',{
                        position: 'bottom-right',
                        style: {
                            background: '#49beaa',
                            color:'antiquewhite',
                            fontFamily: 'sans-serif'
                        }
                        })  
                        navigate('/')
                    }}>
                  {text} tarea
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    )
  }
