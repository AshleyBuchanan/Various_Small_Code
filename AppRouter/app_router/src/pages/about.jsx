import React, {useContext} from 'react';
import { UserContext } from '../UserContext';

export function About() {
    const {user} = useContext(UserContext);

    return (
        <div>
            <h2>About</h2>
            {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <pre>not logged in</pre>}
        </div>
    );
};
