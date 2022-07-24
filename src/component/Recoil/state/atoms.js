import {
    atom,
    atomFamily,
    selector,
    selectorFamily,
    useRecoilValue,
} from 'recoil';

// 아톰 사용하기 => 리렌더링 모습보여주기
export const todoListAtom = atom({
    key: 'recoilTodo',
    default: [],
});

// 아톰 사용하기 => 리렌더링 모습보여주기
export const foodListAtom = atom({
    key: 'recoilFood',
    default: [],
});

// atom 사용하기 with selecotr
export const foodAndTodoAtom = atom({
    key: 'foodAndTodoAtom',
    default: selector({
        key: 'foodAndTodo/default',
        get: ({get}) => {
            const food = get(foodListAtom);
            const todo = get(todoListAtom);
            return {food, todo};
        },
    }),
});

const existFoodList = [
    {id: 1, name: '쌀국수'},
    {id: 2, name: '짜장면'},
    {id: 3, name: '국밥'},
    {id: 4, name: '라면'},
];

export const foodAtomFaily = atomFamily({
    key: 'foodAtomFamily',
    default: foodId => existFoodList.filter(item => item.id === foodId),
});

export const existFoodListAtom = atom({
    key: 'existFoodListAtom',
    default: [
        {id: 1, name: '쌀국수'},
        {id: 2, name: '짜장면'},
        {id: 3, name: '국밥'},
        {id: 4, name: '라면'},
    ],
});

export const foodAtomFamilyWithSelectorFamily = atomFamily({
    key: 'foodAtomFamilyWithSelectorFamily',
    default: selectorFamily({
        key: 'foodAtomFamilySelectorFamily/default',
        get:
            foodId =>
            ({get}) =>
                get(existFoodListAtom).filter(item => item.id === foodId),
    }),
});
