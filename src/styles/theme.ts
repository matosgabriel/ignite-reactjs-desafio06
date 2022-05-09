import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '300': '#DADADA',
      '400': '#999',
      '800': '#47585B'
    },
    white: {
      '800': '#F5F8FA'
    }
  },

  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        // color: 
      }
    }
  }
});