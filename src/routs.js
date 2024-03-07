import React from "react";
import {Button} from "antd";
const Routs = () => {
    const logout = () => {
        console.log('logout');
        localStorage.setItem('isAuth', false);
        console.log(localStorage);
        window.location.reload();
    };

    return (
        <div id="sidebar">
            <nav>
                <ul>
                    <li>
                        <a href={`/people`}>People</a>
                    </li>
                    <li>
                        <a href={`/planets`}>Planets</a>
                    </li>
                    <li>
                        <a href={`/starships`}>Starships</a>
                    </li>
                    <li>
                        <a href={`/error`}>Error</a>
                    </li>
                    <li>
                        <Button onClick={logout} />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Routs;