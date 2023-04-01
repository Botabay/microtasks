import * as React from 'react';
type PropsType={
  name:string
  callback: ()=>void
}
export function Button(props:PropsType) {
  const onClickHandler=()=>{
    console.log('ads');
    console.log(props);
    props.callback()
  }
  return (
    <button onClick={onClickHandler}>{props.name}</button>
  );
}