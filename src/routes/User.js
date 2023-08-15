import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const User = () => {
    const params = useParams();

    return (
        <div>
            <h2>Selected User ID:{params.id}</h2>
        </div>
    );
};

export default User;