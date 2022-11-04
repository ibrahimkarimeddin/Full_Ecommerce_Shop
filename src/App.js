import React  from 'react';
import './styles/App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
function App(){
  const queryclient = new QueryClient()
    return (
      <QueryClientProvider client={queryclient}>
        <div className="App">
          <h1>hello wrold </h1>
        </div>
      </QueryClientProvider>
      
    )
}

export default(App);
