import React from 'react';
import { Button, Input } from 'reactstrap';

const Catagory = ({ handleSearch, searchText, doneHandler, isSelect }) => (
    <div className="my-3">
        <h1>Todo List</h1>
        <div className="catagory-btn mt-4">
            <Button>All</Button>
            <Input placeholder="Search" value={searchText} onChange={(e) => handleSearch(e)} />
            <Button onClick={isSelect ? doneHandler : null}>Done</Button>
        </div>
    </div>
);

export default Catagory;
