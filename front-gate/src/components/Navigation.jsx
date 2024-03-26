import { Link } from "react-router-dom"
import { Flex, Menu, MenuButton, MenuList, MenuItem, Box, Image } from "@chakra-ui/react"
import { useTaskFormPage } from "../hooks/useTaskFormPage"
import { useAuth0 } from "@auth0/auth0-react";
//posiblemente cambiar menuItem por etiqueta de Link

function Navigation() {
  const { logout } = useAuth0();

  const { navigate } = useTaskFormPage()
  let x = '200'
  return (

    <Flex gap={10} p={5} flexDirection={'column'}  bg='#e9d8a6' justifyContent='space-between' h='100vh' alignItems='center' alignSelf={'center'}>
      <Flex gap={10} flexDirection={'column'} >
      <Box mt={5}>
      <Menu>
        <MenuButton as='button'>
          Perfil
        </MenuButton>
        <MenuList>
          
          <MenuItem>
          <Link to='/user-config'>Configuracion</Link>
          </MenuItem>
          <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Cerrar sesion</MenuItem>
        </MenuList>
      </Menu>
      </Box>
      <Link to='/tasks'>Tareas pendientes</Link>      
      <Link to='/tasksT'>Tareas terminadas</Link>  
      <Link to='/tasks-create'> Crear tarea </Link>
      </Flex>
      <Box   >
      <Image  h={x} w={x}  src="../public/images/WALLPAPER-PHONE-avatar.jpg" alt='Dan Abramov' />
      </Box>
      
    </Flex>

  )
}

export default Navigation