import React from 'react'
import Ourteam from "../sections/Ourteam"
import Counter from '../sections/Counter'
import Quickconnect from '../sections/Quickconnect'



export default function Home() {

  return (
    <>
    <div className="wrapper">
      
      <Ourteam/>
      <Counter/>
      <Quickconnect/>
      
    
    </div>
    </>
  );
}