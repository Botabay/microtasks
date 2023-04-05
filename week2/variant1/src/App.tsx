import * as React from 'react';
import './style.css';
import { UniInput } from './UniInput';

function App() {
  let [messages,setMessage]=React.useState([
    {message:'message1'},
    {message:'message2'},
    {message:'message3'}
  ])
  const addMessage=(message:string)=>{
    setMessage([...messages,{message}])
  }
  return (
    <div className="App">
      <UniInput addMessage={addMessage}/>
      {messages.map((el,ind)=>{
        return(
          <div key={ind}>{el.message}</div>
        )}
      )}
    </div>
  );
}

export default App;
