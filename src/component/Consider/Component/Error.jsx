import React from 'react';
import {useRecoilValue} from 'recoil';
import {choiceFail} from '../state';

const Error = () => {
    const choicedMenu = useRecoilValue(choiceFail);
    return <div>{choicedMenu}</div>;
};

export default Error;
