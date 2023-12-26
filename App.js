import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './Component/helloworld';
import Firstcomponent from './Component/firstcomponent';
import Secondcomponent from './Component/secondcomponent';
import Thirdcomponent from './Component/thirdcomponent';
import Fourthcomponent from './Component/fourthcomponent';
import First from './Component/first1';
import Second from './Component/second1';
import Third from './Component/third1';
import Fourth from './Component/fourth1';
import Student from './Component/studentfunction';
import Appclass from './Component/Appclass';
import Display from './Component/display';
import DisplayEvent from './Component/eventhellobye';



function App() {
  var props = {
    Name :"Erica",
    Address : "Delhi",
    Score: "90"
  }; 
  return (
    <div className="App">
      <header className="App-header">
   
        {/* <HelloWorld  /> */}
        {/* <Firstcomponent  />
       <Secondcomponent />
       <Thirdcomponent />
       <Fourthcomponent /> */}

      {/* <First /> 
      <Second />
      <Third />
      <Fourth /> */}

      {/* <Student Name="Erica" Address="New Delhi" Scores="70" /> */}

      {/* <Appclass /> */}

      <Display props={props}/>
      <DisplayEvent />
      </header>
    </div>
  );
}

export default App;
