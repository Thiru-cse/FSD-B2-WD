import { useState } from 'react';
import PropsComp from './Components/PropsComp'
import StateComp from './Components/StateComp';


function App() {
const [value, setValue] = useState(0);
let a = 1;

  return (
    <>
      <h1>App Component</h1>
      <h2>Count: {value}</h2>
      <PropsComp a={a}/>
      <StateComp value={value} setValue={setValue}/>
    </>
  )
}

export default App
