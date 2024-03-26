import React from 'react'
import { Button, Grid, Flex, useDisclosure, useAccordion } from '@chakra-ui/react'
import { ModalComponent } from './Modal'
import { FormikFields } from './FormikFields.jsx'
import { Formik, Form } from 'formik'
import { useAccordionSubtaskForm } from '../hooks/useAccordionSubtaskFormv'



export const AccordionSubtaskForm = (props) => {
  const {setFieldValue, data, onOpen, onClose, isOpen, subTaskSelected, setsubTaskSelected} = props

  const {initialValues, closeModal, onSubmit} = useAccordionSubtaskForm(props)
  
  return (
    <Grid>
      <Button justifySelf={'start'} onClick={onOpen}>Agregar subtareas</Button>

      <ModalComponent
        title="subtareas"
        isOpen={isOpen}
        onClose={closeModal}
        body={
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form>
              <Grid gap={2}>
                <FormikFields
                  name="title"
                  placeholder="titulo"
                  label="titulo"
                />

                <FormikFields
                  name="description"
                  placeholder="description"
                  type="textarea"
                  label="description"
                />
                <FormikFields name="done"  checboxLabel='¿Tarea terminada?' type="checkbox" />

                <Flex justifySelf={"end"} gap={4}>
                  <Button colorScheme="red" onClick={closeModal}>
                    Calcelar
                  </Button>
                  <Button colorScheme="teal" type="submit">
                    Guardar
                  </Button>
                </Flex>
              </Grid>
            </Form>
          </Formik>
        }
      />
    </Grid>
  );
}
