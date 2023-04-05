import * as React from 'react';
type UniInputPropsType={
  addMessage:(message:string)=>void
}
export const UniInput = ({addMessage,...restProps}:UniInputPropsType) => {
  let [inputValue,setInputValue]=React.useState('');
  const onChangeInputHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.currentTarget.value);
  }
  const onClickButtonHandler=(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    addMessage(inputValue);
    setInputValue('')//need to set the 'value' attribute to the input
    // document.querySelector('input').value='';
  }
  return (
    <div>
      <input onChange={onChangeInputHandler} value={inputValue}/>
      <button onClick={onClickButtonHandler}>+</button>
      {/* <div>{inputValue}</div> */}
    </div>
  );
};

