import * as React from 'react';
import './style.css';
import {useState} from 'react'
import {NewComponent} from './NewComponent'

export type FilterType='RUBLS'|'Dollars'|'All'
export type MoneyType={
  banknots: string
  value: number
  number:string
}

export function App() {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])         
  const [filter, setFilter]=useState<FilterType>('All')

  let currentMoney=money;
  if (filter==='RUBLS') currentMoney=money.filter(el=> el.banknots==='RUBLS');
  if (filter==='Dollars') currentMoney=money.filter(el=> el.banknots==='Dollars');

  const onClickHandler=(currancy:FilterType)=>{
    setFilter(currancy)
  }  
  return (
    <NewComponent st={currentMoney} callback={onClickHandler}/>
  )
}


// :Array<moneyType>
/*export function App() {
  const defaultState=[
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]
  const [money, setMoney] = useState([...defaultState])         
  const onClickHandler=(currancy:string)=>{
    setMoney([...defaultState]);
    if (currancy!=''){
      // const filteredArr=[...money.filter(el=> el.banknots===currancy)];
      setMoney([...money.filter(el=> el.banknots===currancy)]);
    } else
    setMoney([...defaultState]);
  }
  
  return (
    <div>
      <button onClick={()=>onClickHandler('RUBLS')}>rubls</button>
      <button onClick={()=>onClickHandler('Dollars')}>$</button>
      <button onClick={()=>onClickHandler('')}>All</button>
      {money.map((el,ind)=>{
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
}*/


/*{money.filter((el)=>el.banknots==='RUBLS')
  .map((el,ind)=>{
    return (
      <div key={ind}>
        <span>{el.banknots}</span>
        <span>{el.value}</span>
        <span>{el.number}</span>
      </div>
    )
})}*/