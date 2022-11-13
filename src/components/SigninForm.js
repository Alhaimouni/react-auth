import React, { useContext } from 'react';
import '../styles/SigninForm.css';
import { authContext } from '../contexts/AuthProvider';
import { Text, VStack, Input, Box } from "@chakra-ui/react";

function SigninForm() {
  const { signIn, err } = useContext(authContext);
  return (
    <Box
      p='50px'
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >Sign In</Text>
      <form onSubmit={signIn}>
        <VStack>
          <Input placeholder='username' width='150px' name='username' variant='flushed' required _placeholder={{ opacity: 0.8, color: 'inherit' }} />
          <Input placeholder='Password' width='150px' variant='flushed' name='password' required _placeholder={{ opacity: 0.8, color: 'inherit' }} />
          <Input type='submit' value='CONTINUE' name='submit' width='150px' />
        </VStack>
      </form>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="xl">{err}
      </Text>
    </Box>
  )
};

export default SigninForm;
