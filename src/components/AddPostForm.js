import React, { useContext } from 'react';
import { dataContext } from '../contexts/DataProvider';
import { Text, VStack, Input, Box } from "@chakra-ui/react";

function AddPostForm() {

  const { addPost } = useContext(dataContext);
  return (
    <Box
      p='20px'
      bg='inhret'
      color='gray.50'
      border='8px'
    >
      <form onSubmit={addPost}>
        <VStack
        w='700px'
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl">Show your soul reflection..</Text>
          <Input placeholder='Title' name='title' required _placeholder={{ opacity: 0.8, color: 'blue' }} />
          <Input placeholder='Content' name='content' required _placeholder={{ opacity: 0.8, color: 'blue' }} />
          <Input type='submit' value='Share' _placeholder={{ opacity: 0.8, color: 'blue' }} color='blue'/>
        </VStack>
      </form>
    </Box>
  )
}

export default AddPostForm;
