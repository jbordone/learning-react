import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props){
    return(
      <li className='TodoItem'>
        <CompleteIcon
        completed={props.completed}
        onComplete = {props.onComplete}
        />

        {/* Solo se aplica la clase TodoItem-p--complete solo si props.completed toma cualquier valor que nos dé verdadero*/}
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>  
       
        <DeleteIcon
         onDelete = {props.onDelete}
        
        />        
      </li>
    );
  
  }

  export {TodoItem}