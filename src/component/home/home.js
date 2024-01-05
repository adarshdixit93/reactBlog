import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Home</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-2">
                  <div className="row align-items-center gx-2">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-2 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          Use State Hook
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 text-end">
                      <div>
                        <Link to="/hooks/usestate">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-2">
                  <div className="row align-items-center gx-2">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-2 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          Use Reducer Hook
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 text-end">
                      <div>
                        <Link to="/hooks/usereducerhook">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-2">
                  <div className="row align-items-center gx-2">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-2 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          Use Effect Hook
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 text-end">
                      <div>
                        <Link to="/hooks/useeffecthook">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-2">
                  <div className="row align-items-center gx-2">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-2 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          Use Layout Effect Hook
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 text-end">
                      <div>
                        <Link to="/hooks/uselayouteffecthook">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-2">
                  <div className="row align-items-center gx-2">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-2 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          Use Ref Hook
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 text-end">
                      <div>
                        <Link to="/hooks/userefhook">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
