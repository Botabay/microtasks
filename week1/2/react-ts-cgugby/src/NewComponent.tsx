import * as React from 'react';

type PropsType={
  topCars:Array<CarsType>
}
type CarsType={
  manufacturer:string
  model:string
}
export const NewComponent = (props:PropsType) => {
  const topCarsComponent=props.topCars.map((el,i)=>{
    return (<tr key={i}><td>{el.manufacturer}</td><td>{el.model}</td></tr>)
  })
  return (
    <div>
      <table>
        <tr>
          <th>manufacturer</th><th>model</th>
        </tr>
        {topCarsComponent}
      </table>
    </div>
  )
};