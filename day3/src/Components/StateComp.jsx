import React from 'react';

const StateComp = ({ value, setValue }) => {
    const handleSubmit = () =>{
        setValue(udhaya=>udhaya+1);
    }
    return (
        <div>
            <h1>State Component</h1>
            <h2>Count: {value}</h2>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default StateComp;