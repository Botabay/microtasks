import * as React from 'react';
import {FilterType,MoneyType} from './App'

type PropsType={
  st:Array<MoneyType>
  callback:(currancy:FilterType)=>void
}

export const NewComponent=(props:PropsType)=>{
  return(
    <div>
      <button onClick={()=>props.callback('RUBLS')}>rubls</button>
      <button onClick={()=>props.callback('Dollars')}>$</button>
      <button onClick={()=>props.callback('All')}>All</button>
      {props.st.map((el,ind)=>{
        return (
          <div key={ind}>
            <span>{el.banknots}</span>
            <span>{el.value}</span>
            <span>{el.number}</span>
          </div>
        )}
      )}
    </div>
  )
}