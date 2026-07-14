import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLoggedInUser } from "./features/auth/authAPI";
import { setUser } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getLoggedInUser();

        dispatch(setUser(res.data.user));
      } catch (error) {
        console.log("User not logged in");
      }
    };

    loadUser();
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
