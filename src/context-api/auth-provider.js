import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AuthProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // const login = JSON.parse(localStorage.getItem("check-login"));
  // const nav = useNavigate();

  // useEffect(() => {
  //   if (login === true) {
  //     setIsLoading(false);
  //     nav("/");
  //     return;
  //   } else {
  //     nav("/login");
  //   }
  // }, []);

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    // console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AuthProvider;
