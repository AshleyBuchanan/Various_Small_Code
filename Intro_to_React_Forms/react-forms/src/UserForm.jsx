import React, {useState} from 'react';
import Input from './Input';


const UserForm = () => {
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: '',
        }
    );

    const handleChange = (e) => {
        setFormData(data => ({
            ...data, 
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Created user, ${formData.username} : ${formData.email} : ${formData.password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
                <Input 
                    type="text" 
                    id="username"
                    placeholder="username" 
                    value={formData.username} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <Input 
                    type="email"
                    id="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Input 
                    type="password"
                    id="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default UserForm;
