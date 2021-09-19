/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

function TodoInput({ updateid, isUpdate, udBtn, handleChange, handleSubmit, text }) {
    return (
        <Form className="entire-todo-input" onSubmit={(e) => handleSubmit(e, updateid)}>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText className="todo-input text-white">
                        <FontAwesomeIcon icon="newspaper" style={{ fontSize: '25px' }} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    name="text"
                    value={text}
                    placeholder="New Todo"
                    onChange={(e) => handleChange(e)}
                />
            </InputGroup>
            <Button type="submit" className="mt-4 btn-task">
                {isUpdate === true ? udBtn : 'Add New Task'}
            </Button>
        </Form>
    );
}

export default TodoInput;
