import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider';
import { Text, VStack, Input, Box } from "@chakra-ui/react";

function SignUpForm() {
  const { signUp, err } = useContext(authContext);
  return (
    <Box
      p='50px'
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >Sign Up</Text>
      <form onSubmit={signUp}>
        <Input name='username' placeholder='Username' variant='flushed' _placeholder={{ opacity: 0.8, color: 'inherit' }} required />
        <Input name='email' placeholder='E-mail' variant='flushed' _placeholder={{ opacity: 0.8, color: 'inherit' }} required />
        <Input name='password' placeholder='Password' variant='flushed' _placeholder={{ opacity: 0.8, color: 'inherit' }} required />
        <Input name='confirmPassword' placeholder='Confirm Password' variant='flushed' _placeholder={{ opacity: 0.8, color: 'inherit' }} required />
        <Input type='submit' value='CONTINUE' name='submit' width='150px' />
      </form>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="xl">{err}</Text>
    </Box>
  )
}

export default SignUpForm
