import React, {useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
    foodAndTodoAtom,
    foodAtomFaily,
    foodAtomFamilyWithSelectorFamily,
} from '../state';

function FoodItem(props) {
    const [food, setFood] = useState('');
    console.log(
        '모든 아이템에서 리렌더링 생기지 않고 딱 여기서만 일어납니다!',
        props.foodId,
    );

    // const [selectedFood, setSelectedFood] = useRecoilState(
    //     foodAtomFaily(props.foodId),
    // ); // atomFamily 사용하기

    const [selectedFood, setSelectedFood] = useRecoilState(
        foodAtomFamilyWithSelectorFamily(props.foodId),
    ); // atomFamily 와 selectorFamily 같이 사용하기

    const handleChangeSelectedFood = () => {
        setSelectedFood([{id: props.foodId, name: food}]);
    };
    return (
        <>
            <div>{selectedFood[0].name}</div>
            <input type="text" onChange={e => setFood(e.target.value)} />
            <button onClick={handleChangeSelectedFood}>이름 바꾸기</button>
        </>
    );
}

export default FoodItem;
