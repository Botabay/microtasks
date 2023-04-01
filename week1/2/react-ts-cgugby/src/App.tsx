import * as React from 'react';
import './style.css';
import {NewComponent} from './NewComponent'

export default function App() {
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]
  return (
    <div>
      <NewComponent topCars={topCars}/>
    </div>
  );
}