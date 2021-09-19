/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';

const Todo = (props) => {
    const { todos, deleteTodo, updateTodo, toggleSelect } = props;
    return (
        <div>
            {todos.map((todo) => (
                <ListGroup className="mb-3 single-todo" key={todo.id}>
                    <ListGroupItem className="d-flex single-todo-catagory">
                        <p className={todo.isSelect ? 'done' : ''}>{todo.text}</p>
                        <div className="single-todo-catagory-button">
                            <Input
                                type="checkbox"
                                className="me-3"
                                checked={todo.isSelect}
                                onChange={() => toggleSelect(todo.id)}
                            />
                            <span
                                onClick={() => updateTodo(todo.id, true)}
                                className="me-3"
                                style={{ cursor: 'pointer', color: '#F9C300' }}
                            >
                                <FontAwesomeIcon icon="pen" />
                            </span>
                            <span
                                onClick={() => deleteTodo(todo.id)}
                                className="me-3"
                                style={{ color: 'red', cursor: 'pointer' }}
                            >
                                <FontAwesomeIcon icon="trash" />
                            </span>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            ))}
        </div>
    );
};

export default Todo;
