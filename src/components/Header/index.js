import React, { useEffect } from "react";
import classes from "./header.module.css";
import Search from "./Search";
import UserLogin from "../../assests/headerIcons/user.png";
import { Link } from "react-router-dom";
import {
  setActiveUser,
  setUerLogOut,
  setUerToken,
  selectUserName,
  selectUserEmail,
  selectUserToken,
  selectUserImage,
} from "../../Redux/features/UserSlice";
import { setModel } from "../../Redux/features/HeaderSlice";
import {
  signInAnonymously,
  onAuthStateChanged,
  getIdToken,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  let dispatch = useDispatch();
  let userName = useSelector(selectUserName);
  let userEmail = useSelector(selectUserEmail);
  let userToken = useSelector(selectUserToken);
  let userImage = useSelector(selectUserImage);
  useEffect(() => {
    signInAnonymously(auth)
      .then((res) => {
        // Signed in..
        dispatch(
          setUerToken({
            Token: res.user.accessToken,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("uid", uid);
        // ...
      } else {
        // User is signed out
        // ...
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
    console.log("inside signout");
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     dispatch(
    //       setUerLogOut({
    //         userName: null,
    //         userEmail: null,
    //         photoURL: null,
    //       })
    //     );
    //   });
  };

  return (
    <div className={classes.HeaderWapper}>
      <div className={classes.Logo}>
        <h1>Evolve Fitness</h1>
      </div>
      <Search />
      <div>
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
            src={
              userImage ||
              "https://storage.googleapis.com/prod-aawz2-bckt/orig/category/cat_icon_image_66b9ea.svg"
            }
            alt="user"
            width={35}
            height={35}
            onClick={() => handelSignOut()}
            // className={classes.UserImg}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
