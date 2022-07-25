import { atom, selector } from "recoil";

// suspense를 설명하기 위한 코드
export const deepThinking = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("치킨");
    }, 1000)
  );

// errorboundary를 설명하기 위한 코드
const failThinking = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("난,,, 메뉴를,, 고를,, 수 없써,,,");
      throw new Error("난,,, 메뉴를,, 고를,, 수 없써,,,");
    }, 1000)
  );

// suspense를 설명하기 위한 코드
export const choiceFood = atom({
  key: "choiceFoodAtom",
  default: selector({
    key: "choiceFoodAtom/default",
    get: async () => {
      const response = await deepThinking();
      return response;
    },
  }),
});

// errorboundary를 설명하기 위한 코드
export const choiceFail = atom({
  key: "choiceFailAtom",
  default: selector({
    key: "choiceFailAtom/default",
    get: async () => {
      const response = await failThinking();
      return response;
    },
  }),
});

// try and catch를 설명하기 위한 코드
export const choiceTryCatchFood = atom({
  key: "choiceFoodTryCatchAtom",
  default: null,
});
