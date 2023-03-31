import { createContext, useContext, useState } from "react";

const spinnerctx = createContext({
  isvisible: false,
  setisvible: () => {},
  isloading: false,
  setisloading: () => {},
  issuccess: false,
  setissuccess: () => {},
});

export const AlertProvider = ({ children }) => {
  const [isvisible, setisvible] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [issuccess, setissuccess] = useState(false);

  return (
    <spinnerctx.Provider
      value={{
        isvisible,
        setisvible,
        isloading,
        setisloading,
        issuccess,
        setissuccess,
      }}
    >
      {children}
    </spinnerctx.Provider>
  );
};

export const usealert = () => useContext(spinnerctx);
