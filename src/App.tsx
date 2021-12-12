import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {StringValidator} from './validator'
import {ExamUseInput, ExamUseTab} from './component/ExampleUseState';

const App = () => {
    return (
        <div className='App'>
            <header className="App-header">
                <p>실전형 리액트 Hooks 10개</p>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="App-Content">
                <ExamUseInput validator={StringValidator.maxLen}/>
                <ExamUseTab/>
            </div>
        </div>
    );
}

export default App;
