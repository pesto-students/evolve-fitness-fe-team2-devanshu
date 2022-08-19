import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.config";
import { Modal, Container } from "react-bootstrap";
import { setModel, ModelState } from "../../Redux/features/HeaderSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  CreateUser,
  GetAdminUser,
  GetProductByOwnerId,
} from "../../services/admiService";
import {
  setAdmin,
  selectUserId,
  selectIsAdmin,
} from "../../Redux/features/UserSlice";
import classes from "./PartnerLogin.module.css";
import { toast } from "react-toastify";

const PartnerLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let UserUid = useSelector(selectUserId);
  let CheckAdmin = useSelector(selectIsAdmin);

  // Partner Googele sign in
  const googleSignIn = async () => {
    if (!CheckAdmin && CheckAdmin === null) {
      const provider = new GoogleAuthProvider();
      const anonymousUser = auth.currentUser;
      anonymousUser.delete();
      await signInWithPopup(auth, provider)
        .then(async (result) => {
          let data = {
            name: result.user.displayName,
            email: result.user.email,
            profilePhoto: result.user.photoURL,
            role: 1,
            userId: result.user.uid,
          };
          await CreateUser(data)
            .then((res) => {
              dispatch(
                setAdmin({
                  isAdmin: 1,
                })
              );
              return navigate("/create-fitness-center");
            })
            .catch((err) => {});
        })
        .catch((error) => {
          // Handle Errors here.
        });
    } else {
      toast.error("Already registered claim now");
    }
  };

  //  Handel Register User
  const RegisterdPatner = async () => {
    await GetProductByOwnerId(UserUid)
      .then((res) => {
        dispatch(
          setAdmin({
            isAdmin: 1,
          })
        );
        if (res.status === 201) {
          return navigate(`/create-fitness-center`);
        } else {
          return navigate(`/create-fitness-center/${UserUid}`);
        }
      })
      .catch((err) => {
        toast.error("please register fitness center first");
      });
  };

  //  Fetch User Data
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in,
        dispatch(
          setAdmin({
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
          })
        );
        if (!user.isAnonymous) {
          await GetProductByOwnerId(user.uid)
            .then((res) => {
              dispatch(
                setAdmin({
                  isAdmin: 1,
                })
              );
            })
            .catch((err) => {});
        }
      } else {
      }
    });
  }, []);
  return (
    <Container>
      <div className={classes.PartnerLoginWrap}>
        <div className={classes.PartnerLoginDisc}>
          <h1>Register your fitness center on Evolve Fitness</h1>
          <p>and get more customers!</p>
        </div>
        <div className={classes.PartnerLoginBtnWrap}>
          <button
            className={classes.RegisterBtn}
            onClick={() => googleSignIn()}
          >
            Register your fitness center
          </button>
          <button
            className={classes.RegisterBtn}
            onClick={() => RegisterdPatner()}
          >
            Fitness center already listed? Claim now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PartnerLogin;
