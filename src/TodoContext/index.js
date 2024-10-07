import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext =  React.createContext();


function TodoProvider({children}){

      // Aact.useEffect(() => {
  //   console.log('Logggggggg 2');
  // } )

  // React.l método useState se puede inicializar a conveniencia, ejm un array vacío [], o un array existente ejm: defaultTodos
  const {item: todos, saveItem: saveTodos,  loading, error} = useLocalStorage('TODOS_V1', [])

  // searchValue, setsearchValue le damos el nombre que querramos, pero por convención el 2do parámetro debe llamarse set(Primer parámetro)
  //Ejm: (value, setValue)
  //useState('') / Se inicializa como necesitemos, en este caso un string vacío
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
  //Generamos una función para marcar el Todo como completado
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  //Aqui buscamos las coincidencias entre la variable todos (que contiene toda la lista) y lo que está escribiendo el usuario en searchValue
  // const searchedTodos = todos.filter(
  //   todo => {
  //    return todo.text.toLocaleLowerCase().includes(searchValue)
  //   }
  // );

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );
 

//Generamos la función para agregar Todo
const addTodo = (text) => {
  const newTodos = [...todos]; //Esta sentencia hace una copia de todos los todos en newTodos
  newTodos.push({
    text, completed:false
  }); 
  saveTodos(newTodos);
};


  //Generamos una función para marcar el Todo como completado
  const completeTodo = (text) => {
    const newTodos = [...todos]; //Esta sentencia hace una copia de todos los todos en newTodos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  //Generamos una función para eliminar el Todo
  const deleTodo = (text) => {
    const newTodos = [...todos]; //Los tres puntos significa que voy a tomar una copia de, array de  todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1) //Elimino el Todo identificado con el indice a un espacio.
    saveTodos(newTodos);
  };

  // const finishTodos = (text) => {
  // const newTodos = [...todos]; //Los tres puntos significa que voy a tomar una copia de, array de  todos
  // const todoIndex = finishTodos.findIndex(
  //   (todo) => todo.text == ''
  // );
  // newTodos[todoIndex].completed = false;
  // newTodos[todoIndex].text = '';
  // setTodos(newTodos);
  // };
  // const msjTodos = "Felicitaciones has completado todas tus tareas...";




return(

    <TodoContext.Provider value={{   
        loading,
        error,
        completedTodos, 
        totalTodos, 
        searchValue, 
        setSearchValue, 
        searchedTodos, 
        addTodo,
        completeTodo,
        deleTodo,
        openModal, 
        setOpenModal
        }}>    
        {children} 
    </TodoContext.Provider>  
);

}


export{TodoContext, TodoProvider}