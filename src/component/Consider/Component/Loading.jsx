import React, {Suspense} from 'react';
import {useRecoilValue} from 'recoil';
import {choiceFood} from '../state';

const Loading = () => {
    const choicedMenu = useRecoilValue(choiceFood);
    return (
        <>
            <br />
            <br />
            <div>{choicedMenu}</div>
        </>
    );
};

export default Loading;
