
import React from 'react'
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() { 
  
return(
  <TodoProvider>
  <AppUI/>
  </TodoProvider>
);
}

export default App;

