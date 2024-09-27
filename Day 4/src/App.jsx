import { useState } from 'react';
import ArrayOperation from './Components/ArrayOperation';
import ConditionalRendering from './Components/ConditionalRendering';
import LifeCycle from './Components/LifeCycle';
import UseEffectAPI from './Components/UseEffectAPI';

function App() {
const [value, setValue] = useState(0);
let a = 1;

let b = [1,2,3,4,5];
const [arrValue, setArrValue] = useState(b)

const [status, setStatus] = useState(false)
const [cartCount, setCardCount] = useState(0)
let data = [
  {id:1, name:"iphone", price:1000},
  {id:2, name:"samsung", price:500},
  {id:3, name:"poco", price:200},
]
const [product, setProduct] = useState(data);

  return (
    <>
      <h1>App Component- {cartCount}</h1>
      {/* <ArrayOperation arrValue={arrValue} setArrValue={setArrValue} /> */}
      {/* {status ?  <ConditionalRendering/> : ""} */}
      {/* <ConditionalRendering cartCount={cartCount} setCardCount={setCardCount} product={product} setProduct={setProduct}/> */}
     {/* <LifeCycle/> */}
     <UseEffectAPI/>
    </>
  )
}

export default App
