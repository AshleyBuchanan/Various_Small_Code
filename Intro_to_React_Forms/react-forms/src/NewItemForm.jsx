import React, {useState} from "react";
import './NewItemForm.css';

const NewItemForm = ({addItem}) => {
    const INITIAL_STATE = {
        name: '',
        qty: '',
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormData(data => (
            {
                ...data, [e.target.name]: e.target.value
            }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="NewItemForm" onSubmit={handleSubmit}>
            <button>Add</button>
            <input 
                className="name"
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className="qty"
                type="number"
                name="qty"
                placeholder="qty"
                value={formData.qty}
                onChange={handleChange}
            />
        </form>
    );
};

export default NewItemForm;
