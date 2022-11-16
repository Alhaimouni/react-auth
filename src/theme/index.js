import { extendTheme } from "@chakra-ui/react";


const them = extendTheme({
  colors: {
    primary: {
      100: '#8EC3B0',
      200: '#BCEAD5',
      300: '#9ED5C5',
      400: '#8EC3B1',
      500: '#9ED5C5',
    },
    secondery: {
      100: '#EAEAEA',
      200: '#3C4048',
      300: '#B2B2B2',
      400: '#B2B2B2',
    },
  },
  fontWeights: {
    mhmd: {
      1: 'italic',
    }
  },
  paddings: {
    mhmd: {
      1: '90%'
    }
  }
});

export default them;