# Happeo Widget

## Getting start

```sh
cp .env.template .env.development
cp .env.template .env.production
```

VITE_APP_LIVE=false => local
VITE_APP_LIVE=true => use for build happeo plugin

## Development

### Folder Structure

1. i18n/locales : language
2. assets: asset directory

### FAQ

1. How to add new translate text?

> /src/i18n/locales/en.ts

-> "screens/{screenName}/{elementName}": "Text",

```ts
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <h1>{t("screens/home/heading")}</h1>
      </Box>
    </>
  );
}
```

## Reference

1. [Material UI Components](https://mui.com/material-ui/getting-started/)
