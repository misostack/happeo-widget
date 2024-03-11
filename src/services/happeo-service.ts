import enviroment from "@app/shared/environment";

const HappeoService = {
  parseUserToken(w: Window) {
    if (enviroment.APP_LIVE) {
      try {
        const windowData = w.name ? JSON.parse(w.name) : {};
        return {
          error: null,
          ...windowData,
          token: windowData.token,
        };
      } catch (error) {
        return { error, token: null };
      }
    }
    return {
      token: "fake_token",
      error: null,
    };
  },
};

export default HappeoService;
