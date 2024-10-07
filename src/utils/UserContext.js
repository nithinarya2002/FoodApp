import { createContext } from "react";

const UserContext = createContext({
  loggedInUserInfo: {},
});

export default UserContext;
