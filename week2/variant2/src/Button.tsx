import * as React from 'react';
type PropsType={
  name:string
  addMessage:()=>void
}
export const Button = ({name,addMessage}:PropsType) => {
  const onClickButtonHandler=()=>{
    addMessage()
  }
  return (
      <button onClick={onClickButtonHandler}>{name}</button>   
  )
}