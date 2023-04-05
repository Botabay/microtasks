import * as React from 'react';
type PropsType={
  f:(a:string)=>void
  s:string
}
export const Input = ({f,s}:PropsType) => {  
  const onChangeInputHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    f(event.currentTarget.value)
  }
  return (
      <input onChange={onChangeInputHandler} value={s}/>      
  )
}

