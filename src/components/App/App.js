import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';

import './styles.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
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
            </div>
        );
    }
};