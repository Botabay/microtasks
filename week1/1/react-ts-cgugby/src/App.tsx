import * as React from 'react';
import './style.css';
import {Header} from './Header'
import { Body } from './Body';
import { Footer } from './Footer';

export default function App() {
  return (
    <div>
      <Header title={'the title'}/>
      <Body bodyTitle={'the title for the body'}/>
      <Footer footerTitle={'the title for the footer'}/>
    </div>
  );
}
