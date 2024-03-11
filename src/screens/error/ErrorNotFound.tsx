import { Box, Container } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "@mui/material/Button";
import { translate } from "@app/i18n/i18n-helper";

export default function ErrorNotFoundScreen() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  // handlers
  const onGoBackHome = () => {
    navigate("/");
  };
  // views
  return (
    <>
      <Container>
        <Box>
          <div id="error-page">
            <h1>{translate("screens/error/heading")}</h1>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
          <Button variant="contained" onClick={onGoBackHome}>
            {translate("screens/error/backButton")}
          </Button>
        </Box>
      </Container>
    </>
  );
}
