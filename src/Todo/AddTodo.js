import React,{useState} from 'react'
import PropTypes from 'prop-types'
// делаем свой хук
function useInputValue(defaultValue =''){
const[value, setValue]= useState(defaultValue)

return{
  bind:{
  value,
  onChange: event =>setValue(event.target.value)
},
clear:() => setValue(''),
value:() => value
 }
 
}


function AddTodo({onCreate}){
  const input =useInputValue('')

  function submittHandler(event){
    event.preventDefault()
  
    if(input.value().trim()){
      onCreate(input.value())
     input.clear()
    }
  }

  return(
    <form style={{margin:'10% auto'}} onSubmit={submittHandler}>
      <input {...input.bind}/>
      <button type='submit'>Add todo</button>
    </form>
  )
}

AddTodo.propTypes ={
  onCreate:PropTypes.func.isRequired
}

export default AddTodo