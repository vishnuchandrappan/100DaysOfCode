const auth = {
  isAuthenticated: false,
  logIn() {
    this.isAuthenticated = true;
  },
  logOut() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
};

export default auth;