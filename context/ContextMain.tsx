import { AuthContextProvider } from "./AuthContext";

const ContextMain = ({ children }: { children: any }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default ContextMain;
