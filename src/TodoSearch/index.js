// Se usa import React para tener acceso a los Estados 
import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch(){
   const {searchValue,
      setSearchValue
    } = React.useContext(TodoContext);
   


    return(  
 <input 
 placeholder="Cortar cebolla"
 className='TodoSearch'
 value={searchValue}
 onChange={(event) => {

   setSearchValue(event.target.value);
      // console.log('Escribiste en el TodoSearch');
      // console.log(event);
      // console.log(event.target);
      // console.log(event.target.value);
 }}
 />
    );
  }

  export {TodoSearch};