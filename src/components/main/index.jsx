/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import shortid from 'shortid';
import TodoInput from '../todo-input';
import TodoList from '../todo-list';
import Todo from '../todo-list/todo';

class Main extends React.Component {
    state = {
        text: '',
        todos: [
            {
                id: 'm1',
                text: 'Create Our First Todo',
                isSelect: false,
            },
            {
                id: 'm2',
                text: 'Create Our Second Todo',
                isSelect: false,
            },
        ],
        isUpdate: false,
        updateid: '',
        searchText: '',
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleSubmit = (e, id) => {
        e.preventDefault();
        if (this.state.isUpdate) {
            const todos = [...this.state.todos];
            const todo = todos.find((todo1) => todo1.id === id);
            todo.text = this.state.text;
            this.setState({ todos });
        } else {
            this.createTodo(this.state.text);
        }
        e.target.reset();
        this.setState({ text: '', isUpdate: false });
    };

    createTodo = (todoText) => {
        const todoObj = {};
        const id = shortid.generate();
        if (todoText === '') {
            return 0;
        }
        todoObj.id = id;
        todoObj.text = todoText;
        this.setState({
            todos: [...this.state.todos, todoObj],
        });
    };

    deleteTodo = (todoId) => {
        const todos = this.state.todos.filter((todo) => todo.id !== todoId);
        this.setState({ todos });
    };

    updateTodo = (todoId, update) => {
        const newTodo = this.state.todos.find((todo) => todo.id === todoId);
        const updateTodoNew = newTodo.text;
        this.setState({ text: updateTodoNew, isUpdate: update, updateid: todoId });
    };

    handleSearch = (e) => {
        this.setState({ searchText: e.target.value });
    };

    performSearch = () => {
        return this.state.todos.filter((todo) =>
            todo.text.toLowerCase().includes(this.state.searchText.toLowerCase())
        );
    };

    toggleSelect = (id) => {
        const todos = [...this.state.todos];
        const todo = todos.find((t) => t.id === id);
        todo.isSelect = !todo.isSelect;

        this.setState(todos);
    };

    doneHandler = () => {
        console.log('done');
    };

    render() {
        const { isUpdate, updateid, searchText } = this.state;
        const todos = this.performSearch();
        return (
            <>
                <TodoInput
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    text={this.state.text}
                    updateid={updateid}
                    isUpdate={isUpdate}
                    udBtn="Update Content"
                />
                <TodoList
                    searchText={searchText}
                    handleSearch={this.handleSearch}
                    doneHandler={this.doneHandler}
                    isSelect={todos.isSelect}
                />
                <Todo
                    todos={todos}
                    deleteTodo={this.deleteTodo}
                    updateTodo={this.updateTodo}
                    toggleSelect={this.toggleSelect}
                />
            </>
        );
    }
}

export default Main;
