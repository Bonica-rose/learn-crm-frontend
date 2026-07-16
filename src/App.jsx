import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLoggedInUser } from "./features/auth/authAPI";
import { setUser, authChecked } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("is User authenticated?", isAuthenticated);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getLoggedInUser();
        console.log(res);
        console.log(res.user);
        dispatch(setUser(res.user));
      } catch (error) {
        console.log(error);
        dispatch(authChecked());
      }
    };

    loadUser();
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
