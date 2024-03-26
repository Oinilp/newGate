import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure, Button, Grid, useToast
  } from '@chakra-ui/react'

import { deleteTask } from '../api/task.api.js'
import { DeleteIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { useTaskFormPage } from '../hooks/useTaskFormPage.js'



export const DelButton = ({color, id}) => {
    const toast = useToast()
    const {navigate } = useTaskFormPage()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const delTask = async ({task})=>{
       await deleteTask(id)
       console.log(`Eliminando tarea ${id}`)
       navigate('/')
       toast({
        title: 'Tarea eliminada',
        status:'success',
        isClosable: true,
      })
    
    }

    return (
        <Grid alignSelf={'center'} mr={4}>
            <Button colorScheme={color} onClick={onOpen}>
                <DeleteIcon/>
            </Button>
    
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Eliminar tarea
                    </AlertDialogHeader>
        
                    <AlertDialogBody>
                        Esta accion no puede deshacerse, procede con cautela.
                    </AlertDialogBody>
        
                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button colorScheme='red' onClick={delTask} ml={3}>
                        Eliminar
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Grid>
      )
}

