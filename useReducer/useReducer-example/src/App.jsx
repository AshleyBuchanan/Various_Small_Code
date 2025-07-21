import { useReducer, useState } from 'react'
import './App.css'

// function reducer(state, action) {
//     switch (action.type){
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// };

function reducer(state, action) {
    switch (action.type){
        case 'add-todo':
            return {todos: [...state.todos, {text: action.text, completed: false} ]}
        case 'toggle-todo':
            return {todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t)}
        default:
            return state;
    }
};

function App() {

    // const [count, dispatch] = useReducer(reducer, 0);

    // return (
    //     <div>
    //         <div>count: {count}</div>
    //         <button onClick={() => dispatch({type: 'increment'})}>increment</button>
    //         <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    //     </div>
    // );

    const [{todos}, dispatch] = useReducer(reducer, {todos:[]});
    const [text, setText] = useState();

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'add-todo', text});
                setText('');
            }}>
                <input onChange={e => setText(e.target.value)} value={text} type="text"/>
            </form>
            {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
            {todos.map((t, idx) => 
            <div 
                onClick={() => dispatch({type: 'toggle-todo', idx: idx})} 
                key={t.text}
                style={{
                    textDecoration: t.completed ?  'line-through' : ''
                }}
            >{t.text}</div>)}
                
        </div>
    );
};

export default App
