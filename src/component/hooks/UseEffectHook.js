import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [data, setData] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">
              Total data length: {data}
            </span>
          </h1>
        </div>
      </div>
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">useEffect Hook</h1>
        </div>
        <div className="text-left mb-5">
          <div>
            <b>Kya hai yeh useEffect?</b>

            <ul className="mt-2">
              <li>
                Socho, aapka React component ek banda hai. UseEffect uska
                special assistant hai jo kuch kaam uske baad karta hai jab
                component screen pe aa jaata hai ya kuch change hota hai.
              </li>
              <li>
                Yeh basically ek function hai jo aap apne component ke andar
                likhte ho, aur React usey component ke render hone ke baad ya
                uske properties badalne ke baad run karta hai.
              </li>
            </ul>
          </div>
          <div>
            <b>Kaise use karte hain useEffect?</b>
            <p className="mt-2">
              <code>
                <pre>{`useEffect(() => {
              // Yaha apna code likho jo render hone ke baad run hona chahiye
              }, []); // Empty array ka matlab hai: sirf pehle render pe run hoga
            `}</pre>
              </code>
            </p>
          </div>
          <div>
            <b>Kya hota hai empty array pass karne se?</b>
            <p className="mt-2">
              <ul>
                <li>
                  Empty array ([]) ka matlab hai ki useEffect ka function sirf
                  pehle render pe hi run hoga. Baaki ke renders mein nahi
                  chalega.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <b>Aur options kya hain?</b>
            <p className="mt-2">
              <ol>
                <li>
                  <b>Variables pass karo:</b>
                  <p className="mt-2">
                    Aap variables ka array pass kar sakte ho. Aisa karne se, jab
                    bhi un variables mein se koi change hoga, tab useEffect ka
                    function fir se run hoga. Example:
                    <br></br>
                    <br></br>
                    <code>
                      <pre>
                        {`useEffect(() =>{" "}
                        {
                          // Yaha ka code chalega jab count ya name badlega
                        }
                        , [count, name]);`}
                      </pre>
                    </code>
                  </p>
                </li>
                <li>
                  <b>Empty array mat pass karo: </b>
                  <p className="mt-2">
                    Agar kuch bhi nahi pass karoge, toh useEffect ka function
                    har render pe run hoga. Lekin dhyan rakhna, isme performance
                    issues aa sakti hain agar aapka function heavy hai.
                  </p>
                </li>
              </ol>
            </p>
          </div>
          <div>
            <b>Kab kya use karein?</b>
            <p className="mt-2">
              <ul>
                <li>
                  <b>Empty array:</b> Jab aapko sirf pehle render pe kuch kaam karna
                  hai, jaise data fetch karna.
                </li>
                <li>
                  <b>Variables:</b> Jab aapko kuch kaam karna hai jab specific
                  variables badalte hain.
                </li>
                <li>
                  <b>Kuch bhi nahi:</b> Jab aapko har render pe kuch kaam karna hai,
                  lekin performance ka dhyan rakhna hai.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <b>Kya kaam kar sakte hain useEffect se?</b>
            <p className="mt-2">
              <ul>
                <li>
                  Data fetch karna: API se data lana, jaise user info, posts,
                  tweets, etc.
                </li>
                <li>
                  Subscriptions set karna: Events ke liye subscribe karna, jaise
                  window resize, scroll events, etc.
                </li>
                <li>
                  Side effects handle karna: DOM manipulation, browser storage
                  use karna, etc.
                </li>
                <li>
                  Cleanup karna: Component destroy hone se pehle kuch cleanup ka
                  kaam karna, jaise timers ya subscriptions ko clear karna.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <b>Yaad rakhna:</b>
            <p className="mt-2">
              <ul>
                <li>
                  UseEffect ka function har render ke baad run hota hai, unless
                  aap usey kisi specific condition pe run karana chahte ho.
                </li>
                <li>
                  UseEffect ka cleanup function bhi hota hai jo component
                  destroy hone se pehle run hota hai.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffectHook;
