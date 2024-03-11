const enviroment = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  APP_VERSION: import.meta.env.VITE_APP_VERSION,
  APP_DEFAULT_LANG: import.meta.env.VITE_APP_DEFAULT_LANG || "en",
  APP_LIVE: import.meta.env.VITE_APP_LIVE || false,
  MODE: import.meta.env.MODE,
};

export default enviroment;
