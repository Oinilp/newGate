import React from 'react'

export const useAccordionSubtaskForm = (props) => {
    const {setFieldValue, data, onOpen, onClose, isOpen, subTaskSelected, setsubTaskSelected} = props
  const initialValues = {
    title: data[subTaskSelected]?.title || '',
    description: data[subTaskSelected]?.description || '',
    done: data[subTaskSelected]?.done || false
  }

  const closeModal= ()=>{onClose()
    setsubTaskSelected(null)
    }


  const onSubmit = (values) => {
    const dataCopy = [...data]
    if(subTaskSelected != null){
      dataCopy[subTaskSelected] = values
    }else{
      dataCopy.push(values)
    }
    setsubTaskSelected(null)
    setFieldValue('subtasks', dataCopy)
    onClose()
  }
  
  return {
    initialValues,
    closeModal,
    onSubmit,


  }
}
