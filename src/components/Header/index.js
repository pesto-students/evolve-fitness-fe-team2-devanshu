import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Search from "./Search";
import UserLogin from "../../assests/headerIcons/user.png";
import Logo from "../../assests/headerIcons/Logo.png";
import BlackLogo from "../../assests/headerIcons/BlackLogo.png";
import { Link, useLocation } from "react-router-dom";

//  User Slice
import {
  setActiveUser,
  setUerLogOut,
  setUerToken,
  selectUserName,
  selectUserEmail,
  selectUserToken,
  selectUserImage,
  selectUserAnonymous,
} from "../../Redux/features/UserSlice";

// header slice
import { setModel } from "../../Redux/features/HeaderSlice";

//  firebase
import {
  signInAnonymously,
  onAuthStateChanged,
  getIdToken,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  let location = useLocation();
  let dispatch = useDispatch();
  let userName = useSelector(selectUserName);
  let userEmail = useSelector(selectUserEmail);
  let userToken = useSelector(selectUserToken);
  let userImage = useSelector(selectUserImage);

  const [displayHeader, setDisplayHeader] = useState(false);
  const CreateAnonymousUser = () => {
    signInAnonymously(auth)
      .then((res) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };
  useEffect(() => {
    // setDisplayHeader(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        dispatch(
          setActiveUser({
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
          })
        );
      } else {
        CreateAnonymousUser();
      }
    });
  }, []);
  const handelSignIn = () => {
    dispatch(
      setModel({
        Model: true,
      })
    );
  };

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(
          setUerLogOut({
            userId: null,
            userName: null,
            userEmail: null,
            photoURL: null,
          })
        );
        CreateAnonymousUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={classes.HeaderWapper}
      style={{
        display:
          location.pathname === "/create-fitness-center" ||
          location.pathname === "/partner-with-us"
            ? "none"
            : "",
      }}
    >
      <div className={classes.Logo}>
        <img src={Logo} alt="EvolveFitness" />

        <Search />
      </div>
      <div className={classes.UserImageWrapper}>
        {userImage === null ? (
          <img
            src={UserLogin}
            alt="Dark"
            width={35}
            height={35}
            className={classes.UserImg}
            onClick={() => handelSignIn()}
          />
        ) : (
          <img
            src={userImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = UserLogin;
            }}
            alt="user"
            width={35}
            height={35}
            onClick={() => handelSignOut()}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
