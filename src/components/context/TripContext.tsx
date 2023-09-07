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
  page: string;
  id: string;
  setPage: Dispatch<SetStateAction<string>>;
  setID: Dispatch<SetStateAction<string>>;
  waiting: string;
  setWaiting: Dispatch<SetStateAction<string>>;
};

const TripContext = createContext<null | ContextValue>(null);
const { Provider } = TripContext;

type TripProviderProps = {
  children: ReactNode;
};

export const TripProvider: FC<TripProviderProps> = ({ children }) => {
  const [page, setPage] = useState<string>("home");
  const [id, setID] = useState<string>("");
  const [waiting, setWaiting] = useState<string>("home");

  return (
    <Provider value={{ page, setPage, id, setID, waiting, setWaiting }}>
      {children}
    </Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) throw new Error("useTrip must be used within a TripProvider");
  return context;
};

export default TripProvider;
