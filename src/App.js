import React  from 'react';

import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from './page/components/Navbar';
function App(){
  const queryclient = new QueryClient()
    return (
      <QueryClientProvider client={queryclient}>
        <Navbar/>
      </QueryClientProvider>
      
    )
}

export default(App);
