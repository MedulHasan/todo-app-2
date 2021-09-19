import Catagory from './todo-category';

const TodoList = ({ searchText, handleSearch, doneHandler, isSelect }) => (
    <div>
        <Catagory
            searchText={searchText}
            handleSearch={handleSearch}
            doneHandler={doneHandler}
            isSelect={isSelect}
        />
    </div>
);

export default TodoList;
