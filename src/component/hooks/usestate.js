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
            <code>useState</code> is a React Hook that lets you add a state
            variable to your component.<br></br>
            so now the question will be what exactly state is ? right
            <br></br>
            so what happens in react is if you declare any value suppose you
            declared <code>counter = 0 </code>
            and then in your html you added like{" "}
            <code>{`<p>{counter}</p>`}</code> then by default it will like 0 and
            now what I want is I will add 2 buttons to incriment /decriment that
            should update counter value and I created functionality like
            <code>
              <pre>
                {`function handleInci(){counter = counter + 1;}`}
                <br></br>
                {`function handleDecr(){counter = counter - 1;}`}
              </pre>
            </code>
            and when you click in view it is still showing as counter = 0 . so
            now you must be thinking like there should be some issue in my
            function . But in react it does not change automatically we need to
            tell the browser to re-render the component in background so it will
            display latest value . so to overcome this we use{" "}
            <code> useState Hook </code> .<br></br>
            <br></br>
            <h5>Syntax</h5>
            <code>const [state, setState] = useState(initialState); </code>
            <br></br>
            The convention is to name state variables like{" "}
            <code> [something, setSomething] </code>using array destructuring.
            <br></br>
            <h5>Parameters</h5>
            <b>initialState:</b> The value you want the state to be initially.
            It can be a value of any type, but there is a special behavior for
            functions. This argument is ignored after the initial render.{" "}
            <br></br>If you pass a function as initialState, it will be treated
            as an initializer function. It should be pure, should take no
            arguments, and should return a value of any type. React will call
            your initializer function when initializing the component, and store
            its return value as the initial state. 
            <br></br>
            <h5>Returns </h5>
            <code>useState</code> returns an
            array with exactly two values: 
            <br></br>The current state. During the first
            render, it will match the initialState you have passed. 
            <br></br>The set
            function that lets you update the state to a different value and
            trigger a re-render.
          </p>
        </section>
      </div>
    </div>
  );
}
