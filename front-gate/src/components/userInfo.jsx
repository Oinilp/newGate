import { Link } from "react-router-dom"
import { Flex, Wrap, WrapItem, Avatar, Text, Box} from "@chakra-ui/react"


export const UserInfo = () => {
  return (
    <Flex p={5} flexDirection={"column"} bg="#e9d8a6" h="100vh">
      <Box flexDirection={"column"}>
        <Avatar ml={'15%'} name="Plinio Valdelamar" size="xl" bg="#9b2226" />

        <Flex
          gap={5}
          mt={5}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text>Plinio Valdelamar</Text>
          <Text>lvl. 1</Text>
          <Text>
            Cargo/Clase: <br />
            Fullstack Sr.
          </Text>
          <Text>ID: 123456789</Text>
          <Text > oinilp02@gmail.com</Text>
          
        </Flex>
      </Box>
    </Flex>
  );
}
