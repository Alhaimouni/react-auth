import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider'
import { When } from 'react-if';
import cookies from 'react-cookies'
import { Box, HStack, Button, Text } from "@chakra-ui/react";


function Header() {

  const { logOut, isAuth } = useContext(authContext);

  return (
    <Box display='flex' justifyContent='flex-end'>
      <HStack>
        <When condition={isAuth}>
          <Text>Welcome {cookies.load('username')}</Text>
          <Button onClick={logOut}>Log Out</Button>
        </When>
      </HStack>
    </Box>
  )
}
export default Header;