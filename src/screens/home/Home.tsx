import Calendar from "@app/components/calendar/Calendar";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <h1>{t("screens/home/heading")}</h1>
        <Calendar />
      </Box>
    </>
  );
}
