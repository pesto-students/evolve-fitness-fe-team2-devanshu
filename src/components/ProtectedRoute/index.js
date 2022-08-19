import { Navigate } from "react-router-dom";

import {
  selectUserAnonymous,
  selectIsAdmin,
} from "../../Redux/features/UserSlice";

import { useSelector, useDispatch } from "react-redux";
import { setModel } from "../../Redux/features/HeaderSlice";

export const ProtectedRoute = ({ children }) => {
  const isAnonymous = useSelector(selectUserAnonymous);
  const isAdmin = useSelector(selectIsAdmin);
  let dispatch = useDispatch();

  if (!isAnonymous && !isAdmin) {
    // user is not authenticated
    console.log("inside");
    dispatch(
      setModel({
        Model: true,
      })
    )
    return <Navigate to="/partner-with-us" />;
  }
  return children;
};
