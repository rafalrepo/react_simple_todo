import React from 'react';
import ListItem from './listItem';
import AddItem from './addItem';
import Message from './message'
import '../App.css';

class ListTodos extends React.Component {

    state = {
        todos: [
        {
            id: 1,
            title: 'task 1',
            completed: false
        },
        {
            id: 2,
            title: 'task 2',
            completed: true
        },
        {
            id: 3,
            title: 'task 3',
            completed: false
        }
        ],
    };

    taskCompleted(id) {
        const index = this.findTaks(id);
        const task = this.state.todos;
        task[index].completed = !(task[index].completed);
        this.setState({todos: task})
    }

    taskDeleted(id) {
        const index = this.findTaks(id);
        const tasks = this.state.todos;
        if (window.confirm('Na pewno chcesz usunąć to zadanie?'))
            tasks.splice(index, 1)
            this.setState({todos: tasks})
    }

    addItem(task) {
        const newTask = {
            id: Math.random(),
            title: task,
            completed: false
        }
        const tasks = this.state.todos;
        tasks.push(newTask);
        this.setState({todos: tasks});
    }

    findTaks(id){
        return this.state.todos.findIndex(element => element.id === id);
    }

    render(){

        const list = this.state.todos.map((element, index)=> {
            return <ListItem key={index} item={element} taskCompleted={this.taskCompleted.bind(this)} taskDeleted={this.taskDeleted.bind(this)} />
        })

        return (
            <div className="container">
                <AddItem addItem={this.addItem.bind(this)}/>
                <ul className="list">
                    {list}
                </ul>
            </div>
        )
    }
}


export default ListTodos;