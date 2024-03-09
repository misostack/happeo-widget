import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DemoCalendar from "./Calendar";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const windowData = window.name ? JSON.parse(window.name) : {};
    setLoading(false);
    if (!windowData.token) return;
    setLoading(false);
    // fetch("/api/verify", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ token: windowData.token }),
    // })
    //   .then((response) => response.json())
    //   .then(() => {
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //     setError(true);
    //   });

    function listener(event) {
      const { data } = event;

      if (!data._h || typeof data._h !== "object") {
        // This is not coming from Happeo
        return;
      }

      if (data._h.userinfo) {
        // Happeo sent us userinfo, we should do stuff with it

        console.log("Content from postMessage", data._h);
      }
    }

    // Start listening to messages
    window.addEventListener("message", listener);

    // Post to Happeo your ID, the scope that you need and optionally you can call "resize" to set the parent iframe height
    window.parent.postMessage(
      { _c: { scopes: ["userinfo.email", "userinfo.id", "organisation.id"] } },
      "*"
    );
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <DemoCalendar></DemoCalendar>
          </>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
