import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { Modal, Container } from "react-bootstrap";
import { setModel, ModelState } from "../../Redux/features/HeaderSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  let dispatch = useDispatch();
  let ModelShow = useSelector(ModelState);
  const HideModel = () => {
    dispatch(
      setModel({
        Model: false,
      })
    );
  };
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const anonymousUser = auth.currentUser;
    anonymousUser.delete();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        dispatch(
          setModel({
            Model: false,
          })
        );
        return;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <Container>
      <Modal size="x" show={ModelShow.Model} onHide={() => HideModel()}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Login
            user={this.state.isSignedIn}
            isUserAnonymous={this.isUserAnonymous}
            toggleLoginPrompt={this.toggleLoginPrompt}
          /> */}
          <h1 onClick={() => googleSignIn()}>Test Model</h1>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Login;
