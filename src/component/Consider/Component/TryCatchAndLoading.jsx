import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {choiceFood} from '../state';

const TryCatchAndLoading = () => {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState('고르는 중');
    const Selecting = async () => {
        try {
            setLoading(true);
            // const choice = await useRecoilValue(choiceFood);
            // setMenu(choice);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <button onClick={Selecting}>메뉴 고민하기 버튼</button>
            {loading ? <div>로딩중</div> : <div>{menu}</div>}
        </>
    );
};

export default TryCatchAndLoading;
