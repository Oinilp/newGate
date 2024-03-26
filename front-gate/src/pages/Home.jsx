import {LoginButton} from "../components/LoginButton"
import { Box, Text, Flex } from "@chakra-ui/react"


export const Home = () => {
  return (
    <>
      <Box>
      <Flex alignItems={'center'} color={'white'} flexDirection={'column'} justifyContent={'space-around'} w={'50vw'} h={'50vh'} border={'2px white solid'}>
        <Text as={'h1'}>
          ToDo Track
        </Text>
        <Text>
          Rastrea tu progreso y priorisa las tareas mas importantes
        </Text>
        <Flex gap={5}>
        <LoginButton texto='login'/>
        <LoginButton />
        </Flex>
      </Flex>
      </Box>
    </>
  );
}
