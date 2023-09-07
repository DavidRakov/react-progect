import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};

const UserContext = createContext<null | ContextValue>(null);
const { Provider } = UserContext;

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export default UserProvider;
