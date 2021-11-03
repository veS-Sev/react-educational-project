import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles={
  li:{
display:'flex',
justifyContent:'space-between',
algnItems:'center',
border:'1px solid blue',
borderRadius:'4px',
padding:'.5rem 1rem'
  },
input:{
  marginRight:'10px'
}
}
 function TodoItem({todo,index, onChange}){
   const{removeTodo}=useContext(Context)
   const classes =[]
   if(todo.completed){
     classes.push('done')
   }
   console.log('todo',todo)
  return(
    <li style = {styles.li}>
      <span className={classes.join(' ')}>
        <input type='checkbox' 
        checked={todo.completed}
        style = {styles.input} 
        onChange={()=>onChange(todo.id)}/>
          <strong>{index+1}</strong>
          &nbsp;
        {todo.title} </span>
<button className = 'rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  )
}
TodoItem.propTypes={
  todo:PropTypes.object.isRequired,
  index:PropTypes.number,
  onChange:PropTypes.func.isRequired
}
export default TodoItem