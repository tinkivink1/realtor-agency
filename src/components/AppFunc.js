import React, {useState} from 'react'



function AppFunc() {
    const [val, setVal] = useState(0);


    function increment() {
        setVal(val + 1)
    }

    function decrement() { 
        setVal(val - 1) 
    }

    return (
        <div className='AppFunc'>
            <h1>{val}</h1>
            <button onClick={increment} className='button' style={{marginRight:10}}>increment</button>
            <button onClick={decrement} className='button'>decrement</button>
        </div>
    )

}

export default AppFunc;