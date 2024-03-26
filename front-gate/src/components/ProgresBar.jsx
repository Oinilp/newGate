import { Progress } from "@chakra-ui/react"

export const ProgresBar = (props) => {

  const {data} = props

  

  return (
    <Progress bg={'#e9d8a6'} colorScheme="teal"  value={data} />
  )
}
