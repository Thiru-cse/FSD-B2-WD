import React from 'react';

const ArrayOperation = ({arrValue, setArrValue}) => {
    const removeArrValue=(indexPos)=>{
        setArrValue((pval)=>pval.filter((item,index)=> index !== indexPos))
    }
    return (
        <div>
            <h1>Array Operation Component</h1>
            {arrValue.map((item, index)=>{
                return(
                    <>
                    <div key={index}>{item}</div>
                    <button onClick={()=>{removeArrValue(index)}}>Remove</button>
                    </>
                )
            })}
        </div>
    );
};

export default ArrayOperation;