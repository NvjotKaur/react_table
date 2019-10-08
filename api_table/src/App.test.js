import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

describe('testing table', ()=>{
 const state={
    userArray:[]
  }
 
  test('check table', ()=>{
    let Tb;
    Tb = wrapper.find("Table");
    expect(wrapper.length).toBe(1);
  })
})
