import * as React from 'react';
type PropsType={
  bodyTitle:string
}
export const Body = (props:PropsType) => {
  return (
    <div>{props.bodyTitle}</div>
  )
};
