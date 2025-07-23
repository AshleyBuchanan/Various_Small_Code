import React, {useState, useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Index} from './pages/index';
import {About} from './pages/about';
import { UserContext } from './UserContext';
import './App.css'

function App() {
    const [user, setUser] = useState(null);

    const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>

                <UserContext.Provider value={providerValue}>
                    <Routes>
                        <Route exact path="/"      element={<Index />} />
                        <Route exact path="/about" element={<About />} />
                    </Routes>
                </UserContext.Provider>
    
    
            </div>
        </Router>
    );
};

export default App
