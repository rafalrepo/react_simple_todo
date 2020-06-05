import React from 'react';
import Header from './header';
import ListTodos from '../listTodos';
import '../../App.css';



function Main(){
    return(
        <main className="main">
            <Header />
            <ListTodos />
        </main>
    )
}
        
export default Main;