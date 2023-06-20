import React, { useRef } from 'react'

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
  const nameInput=useRef<HTMLInputElement>(null)
  const submitHandler=(e:React.FormEvent)=>{
e.preventDefault();
const enteredText=nameInput.current!.value;
if(enteredText?.trim().length===0){
  return;
}
props.onAddTodo(enteredText);
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type="text" id='text' ref={nameInput}/>
      <button >Add Todo</button>
    </form>
  )
}

export default NewTodo