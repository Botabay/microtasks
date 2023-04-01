import * as React from 'react';

type PropsType={
  name:string
  s:number
  callback:()=>void
}

export function Button(props:PropsType) {
  const onClickHandler=()=>{
    props.callback()
  }
  return (
    <button onClick={onClickHandler}>{props.name}</button>
  );
}