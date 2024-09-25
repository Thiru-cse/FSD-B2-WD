import React from 'react';

const PropsComp = ({ a }) => {
    const handleSubmit =()=>{
        // a = 1
        a=a+1;
        console.log(a);
    }
    
    return (
        <div>
            <h1>Props Comp</h1>
            <h1>Count: {a}</h1>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default PropsComp;