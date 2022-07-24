import React, {useContext, useState} from 'react';
import {ContextApi} from '../../../context';

const TodoList = () => {
    const {todoList, setTodoList} = useContext(ContextApi);
    const [todo, setTodo] = useState('');
    const updateTodoList = () => {
        setTodo('');
        setTodoList(prv => [...prv, todo]);
    };
    console.log('리렌더링 Todo Context');
    return (
        <div>
            {todoList.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <input type="text" onChange={e => setTodo(e.target.value)} />
            <button onClick={updateTodoList}>컨텍스트에 todo올리기</button>
        </div>
    );
};

export default TodoList;
