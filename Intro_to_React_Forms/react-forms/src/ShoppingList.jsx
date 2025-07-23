import React, {useState, useRef} from 'react';
import Item from './Item';
import NewItemForm from './NewItemForm';

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: 1, name: 'Peanut Butter', qty: 2},
        {id: 2, name: 'Whole Milk', qty: 1},
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const idRef = useRef(2);
    const addItem = (name, qty) => {
        const id = ++idRef.current;
        setItems(items => [...items, {id, name, qty}]);
    };

    return (
        <div>
            <h3>Shopping List</h3>
            {items.map(item => <Item id={item.id} name={item.name} qty={item.qty} key={item.id}/>)}
            <NewItemForm addItem={addItem}/>
        </div>
    );
};

export default ShoppingList;
