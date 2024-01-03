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
          So for simple value updates we use{" "}
          <b>
            <code>useState Hook</code>
          </b>{" "}
          but if the size of parameters keep incresing we can not rely on{" "}
          <b>
            <code>useState Hook</code>
          </b>{" "}
          so at that time we can use{" "}
          <b>
            <code>useReducer Hook .</code>
          </b>
          <br></br>
          Using{" "}
          <b>
            <code>useReducer Hook</code>
          </b>{" "}
          we can handle multiple values in single function that is{" "}
          <b>
            <code>reducer()</code>
          </b>
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
              <b>reducer:</b> So it uses a reducer function and in that function
              we can write how the function will update . It must be pure,
              should take the state and action as arguments, and should return
              the next state.
            </div>
            <div>
              <b>initialArg:</b> The value from which the initial state is
              calculated. It can be a value of any type. How the initial state
              is calculated from it depends on the next <code>init</code>{" "}
              argument.
            </div>
            <div>
              <b>init (optional):</b> The initializer function that should
              return the initial state. If it's not specified, the initial state
              is set to initialArg. Otherwise, the initial state is set to the
              result of calling <code>init(initialArg)</code> .
            </div>
            <div>
              <b>
                Basic example:{" "}
                <code>{`const [state, dispatch] = useReducer(reducer, { age: 42 });`}</code>
              </b>
            </div>
            <div>
              <code>useReducer</code> returns an array with exactly two values:
            </div>
            <div>
              <b>state:</b> The current state.
            </div>
            <div>
              <b>dispatch:</b> Lets you update the state to a different value
              and trigger a re-render.
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
