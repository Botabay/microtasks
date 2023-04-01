import * as React from 'react';
import './style.css';
import {Button} from './components/Button';
import {useState} from 'react'

export function App() {
  let [st,setSt]=useState(0);
  const increaseState=()=>{
    setSt(++st);
    console.log(st)
  }
  const defaultState=()=>{
    setSt(0);
    console.log(st)
  }
  return (
    <div>
      <h1>{st}</h1>
      <Button name={'increase'} s={st} callback={increaseState}/>
      <Button name={'default'} s={st} callback={defaultState}/>
    </div>
  );
}

// export function App() {
//   let s=0;
//   const onClickHandler=()=>{
//     s++;
//     console.log(s)
//   }
//   return (
//     <div>
//       <h1>{s}</h1>
//       <Button ss={s} callback={onClickHandler}/>
//     </div>
//   );
// }
