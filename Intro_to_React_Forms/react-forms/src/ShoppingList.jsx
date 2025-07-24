import React, {useState, useRef} from 'react';
import {v4 as uuid} from 'uuid';
import Item from './Item';
import NewItemForm from './NewItemForm';

const getId = () => uuid();

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: 1, name: 'Peanut Butter', qty: 2, uuid: getId()},
        {id: 2, name: 'Whole Milk', qty: 1, uuid: getId()},
    ]

    const [items, setItems] = useState(INITIAL_STATE);
    const idRef = useRef(2);
    
    const addItem = (newItem) => {
        const id = ++idRef.current;
        const uuid = getId();
        setItems(items => [...items, {id, ...newItem, uuid}]);
    };

    return (
        <div>
            <h3>Shopping List</h3>
            {items.map(item => <Item id={item.id} name={item.name} qty={item.qty} key={item.uuid}/>)}
            <NewItemForm addItem={addItem}/>
        </div>
    );
};

export default ShoppingList;
