import * as React from 'react';
import './style.css';
import { Input } from './Input';
import { Button } from './Button';

function App() {
  let [messages, setMessage] = React.useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ]);

  let [s,setS]=React.useState('');

  const addMessage = () => {
    setMessage([...messages, { message: s }]);
    setS('')
  };

  return (
    <div className="App">
      <div>
        <Input f={setS} s={s}/>
        <Button name={'+'} addMessage={addMessage}/>
      </div>
      {messages.map((el, ind) => {
        return <div key={ind}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;
