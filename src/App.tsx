import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import AuthService from "./services/auth-service";
import HappeoService from "./services/happeo-service";

function App() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { error, token } = HappeoService.parseUserToken(window);
    if (error) {
      setErrorMessage(error);
      setLoading(false);
    } else {
      // otherwise
      setLoading(true);
      AuthService.verifyHappeoToken(token)
        .then((data) => {
          setUserData(data);
        })
        .catch((err) => {
          setErrorMessage(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    function listener(event: any) {
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

  if (loading) {
    return (
      <>
        <Container>...Loading</Container>
      </>
    );
  }
  if (errorMessage) {
    return (
      <>
        <Container>{errorMessage}</Container>
      </>
    );
  }
  console.log(userData);
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
