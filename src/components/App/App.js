import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';
import AddItemForm from '../AddItemForm';

import './styles.css';

export default class App extends Component {

    id = 0;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'active'
    };

    createTodoItem(label) {
        return {id: this.id++, label, important: false, done: false};
    };

    addItem = (label) => {
        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, this.createTodoItem(label)]
            }
        });
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = this.findIndexById(todoData, id);

            return {
                todoData: [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)]
            }
        });
    };

    findIndexById(array, id) {
        return array.findIndex((el) => el.id === id);
    };

    onToggleDone = (id) => {
        this.updateElement(id, 'done');
    };

    onToggleImportant = (id) => {
        this.updateElement(id, 'important');
    };

    updateElement(id, field) {
        this.setState(({todoData}) => {
            const index = this.findIndexById(todoData, id);
            const element = todoData[index];
            element[field] = !element[field];

            return {
                todoData: [
                    ...todoData.slice(0, index),
                    element,
                    ...todoData.slice(index + 1)]
            }
        });
    };

    addSearchTerm = (term) => {
        this.setState({term});
    };

    updateFilteringTab = (filter) => {
        this.setState({filter});
    };

    filter(array, currentTab) {
        switch (currentTab) {
            case "all" :
                return array;
            case "active":
                return array.filter((el) => el.done === false);
            case "done":
                return array.filter((el) => el.done === true);
            default:
                return array;
        }
    };

    search(array, term) {
        return term.trim()
            ? array.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
            : array;
    };

    render() {
        const todoItemsCount = this.state.todoData.filter((el) => el.done === false).length;
        const doneItemsCount = this.state.todoData.length - todoItemsCount;

        const {todoData, term, filter} = this.state;
        const filteredItems = this.search(this.filter(todoData, filter), term);

        return (
            <div className="todo-app">
                <AppHeader toDo={todoItemsCount} done={doneItemsCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onFiltered={this.addSearchTerm}/>
                    <ItemStatusFilter filter={filter} onFiltered={this.updateFilteringTab}/>
                </div>
                <TodoList
                    items={filteredItems}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    onDeleted={this.deleteItem}/>
                <AddItemForm onAdded={this.addItem}/>
            </div>
        );
    }
};