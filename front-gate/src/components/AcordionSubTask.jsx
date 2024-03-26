import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Grid, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { AccordionSubtaskForm } from './AccordionSubtaskForm';
import { useFormikContext } from 'formik';

export const AcordionSubTask = ({values}) => {
    const {setFieldValue} = useFormikContext()
    const {onOpen, onClose, isOpen} = useDisclosure()
    
    const [subTaskSelected, setsubTaskSelected] = useState(null)


  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Subtareas
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          
          <Grid gap={2}>
            {values.subtasks.map((task, i) => (
                <Flex onClick={()=>{ onOpen()
                    setsubTaskSelected(i)
                }} p={2} borderWidth={1} key ={i} borderRadius={'lg'}>
                    <Text>
                    {task.title}
                    </Text>
                </Flex>
            ))}
            <AccordionSubtaskForm setsubTaskSelected={setsubTaskSelected} subTaskSelected={subTaskSelected} onOpen={onOpen} onClose={onClose} isOpen={isOpen} setFieldValue={setFieldValue} data={values.subtasks}/>
          </Grid>
          
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
