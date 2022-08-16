import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
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
    const [user, setUser] = useState({});
  const HideModel = () => {
    dispatch(
      setModel({
        Model: false,
      })
    );
  };
const logOut = () => {
  signOut(auth);
};
 const googleSignIn = () => {
   const provider = new GoogleAuthProvider();
   // signInWithPopup(auth, provider);
   signInWithRedirect(auth, provider);
 };
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => {
    unsubscribe();
  };
}, []);
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
          <h1>Test Model</h1>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Login;
