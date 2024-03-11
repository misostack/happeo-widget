const AuthService = {
  // fake auth service
  verifyHappeoToken(token: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(token);
      }, 500);
    });
  },
};

export default AuthService;
