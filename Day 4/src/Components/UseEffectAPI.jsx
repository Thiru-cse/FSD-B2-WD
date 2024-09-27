import React, { useEffect, useState } from 'react';

const UseEffectAPI = () => {
    const [fetchDatas, setFetchDatas] = useState([]) // empty array ?

    useEffect(()=>{
        fetchData() 
    },[])

    const fetchData = async()=>{
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json(); // [{}]
            setFetchDatas(jsonData)
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <h1>UseEffect API</h1>
            {fetchDatas.map((item)=>{
                return(
                    <>
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{item.category}</h1>
                       
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default UseEffectAPI;