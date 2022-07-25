import { selector, selectorFamily } from "recoil";
import { foodListAtom, todoListAtom } from "./atoms";

// selector 사용해보기
export const foodAndTodoSelector = selector({
  key: "foodAndTodoSelector",
  get: ({ get }) => {
    const food = get(foodListAtom);
    const todo = get(todoListAtom);
    return {
      food,
      todo,
    };
  },
  set: ({ set }, newValue) => {
    set(foodListAtom, newValue);
  },
});
