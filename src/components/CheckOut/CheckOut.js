import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const CheckOut = () => {
    const { id } = useParams();
    if (id > 3) return <NotFound></NotFound>;
    return (
        <div>
            CheckOut {id}
        </div>
    );
};

export default CheckOut;