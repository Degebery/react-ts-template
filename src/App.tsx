import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router';
import theme from './themes/theme';

export default observer(() => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
));
