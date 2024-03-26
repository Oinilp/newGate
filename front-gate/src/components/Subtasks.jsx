import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button, useDisclosure} from '@chakra-ui/react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import SubtaskForm from './SubtaskForm'

function Subtasks() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
    <Accordion>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Subtareas
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <>
                <Button onClick={onOpen}>Agregar subtareas</Button>
        
                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agregar subtarea</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <SubtaskForm/>
                    </ModalBody>
        
                    
                </ModalContent>
                </Modal> 
            </>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
    )
}

export default Subtasks


