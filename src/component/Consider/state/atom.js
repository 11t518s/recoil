import {atom, selector} from 'recoil';

const deepThinking = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve('치킨');
        }, 1000),
    );

const failThinking = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            reject('난,,, 메뉴를,, 고를,, 수 없써,,,');
            throw new Error('난,,, 메뉴를,, 고를,, 수 없써,,,');
        }, 1000),
    );

export const choiceFood = atom({
    key: 'choiceFoodAtom',
    default: selector({
        key: 'choiceFoodAtom/default',
        get: async () => {
            const response = await deepThinking();
            return response;
        },
    }),
});

export const choiceFail = atom({
    key: 'choiceFailAtom',
    default: selector({
        key: 'choiceFailAtom/default',
        get: async () => {
            const response = await failThinking();
            return response;
        },
    }),
});
