import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./component/home/home";
import UseStateHook from "./component/hooks/usestate";
import UseReducerHook from "./component/hooks/UseReducerHook";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="text-center text-xxl-start py-5">
                  <h1 className="display-3 fw-lighter mb-5">
                    <span className="text-gradient d-inline">
                      Lets Learn React Together
                    </span>
                  </h1>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <Link to="/home">
                      <div
                        className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                      >
                        Start Learning
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/hooks/usestate"
            element={<UseStateHook />}
          ></Route>
          <Route
            exact
            path="/hooks/usereducerhook"
            element={<UseReducerHook />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
