import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {foodListAtom} from '../state';

const Recoil = () => {
    const [foodList, setFoodList] = useRecoilState(foodListAtom);
    const [todo, setTodo] = useState('');
    const updateFoodList = () => {
        setTodo('');
        setFoodList(prv => [...prv, todo]);
    };
    console.log('리렌더링 food recoil');
    return (
        <>
            <div>
                {foodList.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                <input type="text" onChange={e => setTodo(e.target.value)} />
                <button onClick={updateFoodList}>recoil에 food올리기</button>
            </div>
        </>
    );
};

export default Recoil;
