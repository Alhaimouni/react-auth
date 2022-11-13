import React from 'react'
import '../styles/Footer.css'

import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      display='flex'
      alignItems="center"
      justifyContent="center"
      minH='150px'>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="xl">Copyright © 2021-2022, The Next Web B.V. Made with ❤️ in Jordan
      </Text>
    </Box>
  )
}

export default Footer;