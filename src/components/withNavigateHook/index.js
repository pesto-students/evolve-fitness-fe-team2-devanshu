import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const withNavigateHook = (Component) => {
  return (props) => {
    const navigation = useNavigate();
    const param = useParams();

    return <Component navigation={navigation} param={param} {...props} />;
  };
};

export default withNavigateHook;
