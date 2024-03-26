import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

export const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  const {texto}= props

  

  return (texto=='login' ? <Button w={'100px'} colorScheme="blue" onClick={() => loginWithRedirect()}>Log In</Button> 
  :<Button colorScheme="yellow" w={'100px'} onClick={() => loginWithRedirect()}>Register</Button>) ;
};




export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button colorScheme="red" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};


