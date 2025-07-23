import React, {useContext} from 'react';
import { UserContext } from '../UserContext';
import { login } from '../utils/login';

export function Index() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>Index</h2>
            {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <pre>not logged in</pre>}
            {user 
                ? <button 
                    onClick={() => setUser(null)}
                    >logout
                  </button> 
                : <button 
                    onClick={async () => {
                        const user = await login();
                        setUser(user)}}
                    >login
                  </button>
            }
        </div>
    );
};

