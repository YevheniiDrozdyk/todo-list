import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';
import AddItem from '../AddItem';

import './styles.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    addItem = () => {
        this.setState(({todoData}) => {
            const id = 1 + Math.max.apply(null, todoData.map((el) => el.id));
            const newElement = {label: 'Go to sleep now', important: false, id};
            return {
                todoData: [...todoData, newElement]
            }
        });
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => id === el.id);

            return {
                todoData: [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)]
            }
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList items={this.state.todoData} onDeleted={this.deleteItem}/>
                <AddItem onAdded={this.addItem}/>
            </div>
        );
    }
};