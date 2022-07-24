import React, {createContext, useState} from 'react';

export const ContextApi = createContext(null);

const ContextStore = props => {
    const [todoList, setTodoList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    return (
        <ContextApi.Provider
            value={{
                todoList,
                setTodoList,
                foodList,
                setFoodList,
            }}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default ContextStore;
