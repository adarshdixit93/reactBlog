import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };

    default:
      break;
  }
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">{state.counter}</span>
          </h1>
        </div>
        <div className="text-center mb-5">
          <button
            className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder mx-3"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder mx-3"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>
        </div>
      </div>

      <div className="container px-5 my-5">
        <h1 className="fw-bolder">
          <code>useReducer</code>
        </h1>
        <p>
          <b>
            <code>useReducer Hook</code>
          </b>{" "}
          is a React Hook that lets you add a <b>reducer</b> to your component.
          <br></br>
          <br></br>
          to fanda y hai ki ki jab bhi koi value update karni hoti hai to hum <code>useState Hook</code> ka use kr sakte hain .
          <br></br>
          But if aapke pass bahut sare variables ho update ke liye to hum <code>useState Hook</code> pr rely nhi reh sakte to us case me hum <code>useReducer Hook</code> use krte hain .
          <br></br>
          <br></br>
          <section>
            <h4>How to use</h4>
            <code>
              <b>
                {
                  "const [state, dispatch] = useReducer(reducer, initialArg, init?);"
                }
              </b>
            </code>
            <br></br>
            <div>
              <b>reducer:</b> 
              
              so sabse pahle as input ye ek function use krta hai <code>reducer()</code> and us function me hum value ko update karenge uska logic likhte hain.

              And Y ek PURE fucntion hona chahiye .
              And Y function 2 argumnets lega one is state and other is type of action and then after process next state return karega
            </div>
            <div>
              <b>initialArg:</b> 
              and second argument me <code>useReducer Hook</code> initial values ka obj leta hai .
              And if initial values ko hum calculate krke use krna chahiye hai then hum  <code> init </code>use karte hain
            </div>
            <div>
              <b>init (optional):</b> y optional function hota hai and y only us case me hi use karte hain if hum initial values ko calculate karna chaite hain .
            </div>
            <div>
              <b>
                Basic example:{" "}
                <code>{`const [state, dispatch] = useReducer(reducer, { age: 42 });`}</code>
              </b>
            </div>
            <div>
              <code>useReducer</code> 2 values return krta hai in array form :
            </div>
            <div>
              <b>state:</b> The current state : currently state (variable) ki value kya hai .
            </div>
            <div>
              <b>dispatch:</b> 
              dispatch function jo state ki value change karega and re-render trigger karega.
              <br></br>
              <b>Example: </b> <code>{`dispatch({ type: "INCREMENT" })`}</code>
              <br></br>
              <br></br>
              <code>
                <pre>
                  {`function reducer(state, action) {switch (action.type) {
                            case "INCREMENT":
                                return {
                                    counter: state.counter + 1
                                };
                            case "DECREMENT":
                                return {
                                    counter: state.counter > 0 ? state.counter - 1 : 0,
                                };
                            default:
                                break;
                        }
                      }`}
                </pre>
              </code>
            </div>
          </section>
        </p>
      </div>
    </div>
  );
}
