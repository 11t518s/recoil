import React, {useContext, useState} from 'react';
import {ContextApi} from '../../../context';

function FoodList() {
    const {foodList, setFoodList} = useContext(ContextApi);
    const [food, setFood] = useState('');
    const updateTodoList = () => {
        setFood('');
        setFoodList(prv => [...prv, food]);
    };
    console.log('리렌더링 Food Context');
    return (
        <div>
            {foodList.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <input type="text" onChange={e => setFood(e.target.value)} />
            <button onClick={updateTodoList}>컨텍스트에 food올리기</button>
        </div>
    );
}

export default FoodList;
