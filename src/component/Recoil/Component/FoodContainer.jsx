import React from 'react';
import FoodItem from './FoodItem';

function FoodAtomFamily() {
    const foodIdList = [1, 2, 3, 4];

    return (
        <div>
            <br />
            <br />
            <div>FoodAtomFamily</div>
            {foodIdList.map(item => (
                <FoodItem key={item} foodId={item} />
            ))}
        </div>
    );
}

export default FoodAtomFamily;
