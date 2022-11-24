import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from 'header';
import {MyModule} from 'MyModule'
function App() {
  return (
    <>
        <Header/>
        <div>
            Content!
        </div>
        <MyModule/>
    </>
);}

export default App;
