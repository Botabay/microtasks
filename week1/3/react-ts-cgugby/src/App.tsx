import * as React from 'react';
import './style.css';
import {Button} from './components/Button'

export function App() {
  const f1=(name:string)=>{console.log(name)}
  const f2=(name:string,age:number)=>{console.log(name,age)}
  const f3=()=>{console.log('simple')}
  return (
    <div>
      <Button name={'button 1'} callback={()=>f1('ivan')} />
      <Button name={'button 2'} callback={()=>f2('ivan',22)}/>
      <Button name={'button 3'} callback={f3}/>
    </div>
  );
}

// export default function App() {
//   const onClickHandler1=(name:string)=>{
//     console.log(name);
//   }
//   const onClickHandler2=(name:string,event:React.MouseEvent<HTMLButtonElement>)=>{
//     console.log(event.target,name)
//   }
//   return (
//     <div>
//       <button onClick={()=>onClickHandler1('ivan')} >value1</button>      
//       <button onClick={(event:React.MouseEvent<HTMLButtonElement>)=>onClickHandler2('bob',event)} >valu2</button>
//     </div>
//   );
// }