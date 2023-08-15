import React from 'react';
import {useLocation} from "react-router-dom";

const Users = () => {
    const location = useLocation();
    const search = location.search
    const query = new URLSearchParams(search)

    return (
        <>
            { location.search }
            <h2>Users with sorting: {query.get('sorting')}</h2>
        </>
    );
};

export default Users;