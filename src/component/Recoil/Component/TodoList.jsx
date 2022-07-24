import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {todoListAtom} from '../state/atoms';

const TodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const [todo, setTodo] = useState('');
    const updateTodoList = () => {
        setTodo('');
        setTodoList(prv => [...prv, todo]);
    };
    console.log('리렌더링 todo recoil');
    return (
        <>
            <div>
                {todoList.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                <input type="text" onChange={e => setTodo(e.target.value)} />
                <button onClick={updateTodoList}>recoil에 todo올리기</button>
            </div>
        </>
    );
};

export default TodoList;
