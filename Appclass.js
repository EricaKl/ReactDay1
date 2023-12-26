// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Student from './studentclass'

class Appclass extends React.Component{
    render()
    {
        return(
            <div>
              <Student Name="Akshit" Address="Gurgoan" Scores="80" />  
            </div>
            
        );
    }
}

export default Appclass