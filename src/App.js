  import React from 'react';
  import logo from './logo.svg';
  import { ChakraProvider } from '@chakra-ui/react'
  import { Dashboard } from './screens/dashboard/index';
  function App() {
    return (
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
    );
  }

  export default App;
