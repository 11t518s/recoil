import React from 'react';
import TodoList from './Component/TodoList';
import FoodList from './Component/FoodList';

const Context = () => {
    console.log('리렌더링context');
    return (
        <div>
            <div>context</div>
            <div>todoList</div>
            <TodoList />
            <div>foodList</div>
            <FoodList />
        </div>
    );
};

export default Context;
