import React from "react";
import { useState } from "react";

export default function UseStateHook() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type) => {
    switch (type) {
      case "incriment":
        let incCounter = counter + 1;
        setCounter(incCounter);
        break;
      case "decriment":
        let decCounter = 0;
        if (counter > 0) {
          decCounter = counter - 1;
          setCounter(decCounter);
        } else {
          setCounter(0);
        }
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">{counter}</span>
          </h1>
        </div>
        <div className="text-center mb-5">
          <button
            className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder mx-3"
            onClick={() => handleCounter("incriment")}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder mx-3"
            onClick={() => handleCounter("decriment")}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="container px-5 my-5">
        <section className="basicInfo">
          <h1 className="fw-bolder"><code>useState</code></h1>
          <p>
            <code>useState</code> ek react hook hai jiski help se aap apne component me ek state variable add kar sakte hain<br></br>
            so now the question will be what exactly state is ? right
            <br></br>
            to react me kya hota hai ki jab aap  koi variable declare krte hain (<code>counter = 0 </code>) and uskoi koi value assign krte hain and aap apne html me kuch is tarah se add karte hain <code>{`<p>{counter}</p> `}</code> 
             aur wo view ke time 0 dikhata hai .
            <br></br>
            ab hum kya chahte hai ki mai 2 buttons add karunga incriment /decriment , to jab mai y button par click kr rha hu to counter ka value update hona chahiye.

            <br></br>
            to uske liye mai 2 functions banata hun kuch is tarah se 
            <br></br>
            <code>
              <pre>
                {`function handleInci(){counter = counter + 1;}`}
                <br></br>
                {`function handleDecr(){counter = counter - 1;}`}
              </pre>
            </code>

            to ab jab hum buttons pr click krte hai to dekhte hain ki value me koi changes nhi a rhe and hum sochne lagte hain ki shayad hamare function me hi koi issue hoga .
            <br></br>

            Par actually react me koi bhi value direct update nhi hoti hai uske liye humko browser ko render krna hota hai for every event .

            to is problem ko overcome krne ke liye hum <code> useState Hook </code> use krte hain.
            <br></br>
            <br></br>
            Now lets see ki hum is hook ko kaise use kar sakte hain: 
            <br></br>
            <br></br>
            <h5>Syntax</h5>
            <code>const [state, setState] = useState(initialState); </code>
            <br></br>
            The convention is to name state variables like{" "}
            <code> [something, setSomething] </code>using array destructuring.

            matlab y hua ki humko if useState hook use krna hai to humko yahi systex use krna hoga for code readability . ex: [argument, setArgument], [counter, setCounter], [name, setName]
            <br></br>
            <br></br>
            <h5>Parameters</h5>
            <b>initialState: </b> 
            to hum kisi bhi variable ko by default kya value dena chahte hain wo hum initialState ke place pr use karenge and hum iska type kuch bhi use kr sakte hain.
            And after hamara view render ho gya then initialState ko ignore kar diya jata hai .          
            
            <br></br>
            <br></br>

            <h5>Returns </h5>
            to useState return kya kya krta hai, lets see:
            <br></br>
            <code>useState</code> 
            to useState ek array return krta hai withexactly 2 values 

            <br></br>The current state. ( During the first
            render, it will match the initialState you have passed. )

            Varibale jo humne use kiya hai uski current value kya hai .
            <br></br>The set
            function : and dusra ek set function jo hamare variable / state ki value ko update karega and re-render trigger karega
          </p>
        </section>
      </div>
    </div>
  );
}
