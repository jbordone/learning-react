import React from 'react';


//Esta función debe manejar todo lo relacionado a localStorage, es importante destacar que el nombre de la función empieza por use para identificar un Custom Hooks. 
function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading,] = React.useState(true);
  const [error, setError,] = React.useState(false);

    
    React.useEffect(() => {
      setTimeout(() =>{

        try{
          const localStorageItem = localStorage.getItem(itemName);
          
          let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
       setLoading(false);
      }
      catch(error) {
        setLoading(false);
        setError(error);
      }
      }, 2000);
  }, []);
    
  
  
     //Generamos una función que actualice al estado y al localStorage al mismo tiempo y que sea la función que llamemos cada vez que deseemos actualizar el estado persistente
     const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
      item, 
      saveItem,
       loading, 
       error
      };  
  }
  
  export { useLocalStorage };