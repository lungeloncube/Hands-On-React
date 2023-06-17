import {useState} from 'react';

export default ()=>{
    // create a variable in memory and allow us to modify the sane vaiable
    //calling set state below allows aus to initialise that variable witha value

    const [count, setCount]= useState(0)
    return (
        <button className="outline" onClick={()=>setCount(count+1)}> 
    
        {/* {(()=>{
            if(count===0){
                return "Click to Support"
            }else{
                return `Supported ${count} times`
            }
        })()} */}

        {/* //tenary */}
        {count===0?"Click to support":`Supported ${count} times`}
        </button>
    )
}