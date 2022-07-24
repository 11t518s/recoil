import {selector, selectorFamily} from 'recoil';
import {foodListAtom, todoListAtom} from './atoms';

export const foodAndTodoSelector = selector({
    key: 'foodAndTodoSelector',
    get: ({get}) => {
        const food = get(foodListAtom);
        const todo = get(todoListAtom);
        return {
            food,
            todo,
        };
    },
    set: ({set}, newValue) => {
        set(foodListAtom, newValue);
    },
});

export const foodSelectorFamily = selectorFamily({
    key: 'foodSelectorFamily',
    get: () => {
        set;
    },
});
