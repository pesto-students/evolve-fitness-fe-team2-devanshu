import React, { useEffect } from "react";
import classes from "./header.module.css";
import Search from "./Search";
import UserLogin from "../../assests/headerIcons/user.png";
import Logo from "../../assests/headerIcons/Logo.png";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//  User Slice
import {
  setActiveUser,
  setUerLogOut,
  selectUserImage,
} from "../../Redux/features/UserSlice";

// header slice
import { setModel } from "../../Redux/features/HeaderSlice";

//  firebase
import { signInAnonymously, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  let dispatch = useDispatch();
  let userImage = useSelector(selectUserImage);
  const CreateAnonymousUser = () => {
    signInAnonymously(auth);
  };
  useEffect(() => {
    // setDisplayHeader(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
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
        toast.success("Logout successfully");
        CreateAnonymousUser();
      })
      .catch((err) => {
        toast.error("Logout failed");
        console.log(err);
      });
  };

  return (
    <div className={classes.HeaderWapper}>
      <div className={classes.Logo}>
        <Link to="/">
          <img src={Logo} alt="EvolveFitness" className={classes.LogoImg} />
        </Link>

        <Search />
      </div>
      <div className={classes.UserImageWrapper}>
        <>
          {userImage === null ? (
            <img
              src={UserLogin}
              alt="Dark"
              width={35}
              height={35}
              className={classes.UserImg}
              onClick={() => handelSignIn()}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          ) : (
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  color: "#000",
                  backgroundColor: "#000",
                  borderColor: "#000",
                  boxShadow: "none",
                }}
              >
                <img
                  src={userImage}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = UserLogin;
                  }}
                  alt="user"
                  width={35}
                  height={35}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
                <Dropdown.Item onClick={() => handelSignOut()}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
