import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = (props) => {
    return (


            <Spinner className="align-self-center align-spinner mx-auto my-auto" style={{ width: '3rem', height: '3rem' }} />

    );
}

export default Loading;