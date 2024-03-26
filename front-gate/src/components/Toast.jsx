import { useToast } from '@chakra-ui/react'
import React from 'react'

export const Toast = (props) => {
    const Toast = useToast()
    //const statuses = ['success', 'error', 'warning', 'info']
    const {title, status} = props
  
    return (
        ({title, status}) => Toast({
            title: title,
            status:status,
            isClosable: true,
          })
        
    )
}
