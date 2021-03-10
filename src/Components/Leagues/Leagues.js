import React from 'react';

const Leagues = (props) => {
    const {strLeague} = props.league
    return (
        <div>
            <h1>This is {strLeague}</h1>
        </div>
    );
};

export default Leagues;