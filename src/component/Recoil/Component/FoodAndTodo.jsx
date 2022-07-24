import React, {useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {foodAndTodoAtom, foodAndTodoSelector} from '../state';

function FoodAndTodo() {
    console.log('리렌더링 recoil food and todo');

    // const foodAndTodo = useRecoilValue(foodAndTodoSelector); // 읽기전용 selector
    // const foodAndTodo = useRecoilValue(foodAndTodoAtom); // atom에 selector로 default를 만들어줌
    const [foodAndTodo, setFoodAndTodo] = useRecoilState(foodAndTodoSelector); // 양방향 selector
    const [food, setFood] = useState();
    const handleUpdateFoodButton = () => {
        console.log([...foodAndTodo.food, food]);
        setFoodAndTodo([...foodAndTodo.food, food]);
    };

    return (
        <>
            <div>
                <div>이 아래는 selector를 활용한 코드입니다</div>
                <div>
                    food와 todo를 모두 가져왔지만 아래 버튼을 통해서 food에
                    새로운 리스트를 추가해줄 수 있습니다.
                </div>
                <br />
                <div>todo</div>
                <br />
                {foodAndTodo.todo.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <br />
            <br />
            <div>
                <div>food</div>
                <br />
                {foodAndTodo.food.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                <input onChange={e => setFood(e.target.value)} />
                <button onClick={handleUpdateFoodButton}>food 추가하기</button>
            </div>
        </>
    );
}

export default FoodAndTodo;
