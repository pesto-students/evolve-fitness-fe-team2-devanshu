import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../Modal/index"));
// import Modal from "../Modal";
import { setModel, ModelState } from "../../Redux/features/HeaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../../styles/Login.module.css";

function Login() {
  const route = useRouter();
  let ModelDisplay = useSelector(ModelState);
  const dispatch = useDispatch();
  const auth = firebase.auth();
  const data = null;
  // Hold a reference to the anonymous current user.
  const anonymousUser = firebase.auth().currentUser;
  const uiConfig = {
    // autoUpgradeAnonymousUsers: true,
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    // signInSuccessUrl: '/profile',
    signInOptions: [
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,

        defaultCountry: "IN",
      },
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        clientId:
          "146628349653-bgebh7vc3bmbibh3pnp5mkfo77b754gt.apps.googleusercontent.com",
      },
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],

    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => {
        // this.props.history.push('/profile')
        console.log("signIn was successful!");
        dispatch(setModel(false));
        localStorage.setItem("login", true);
        route.push("/");
        // this.props.history.push("/");
      },
      signInFailure: (error) => {
        console.log("signIn failed!");
        if (error.code != "firebaseui/anonymous-upgrade-merge-conflict") {
          console.log("anonymous-upgrade-merge-conflict!");
          return Promise.resolve();
        }
        var cred = error.credential;
        // If using Firebase Realtime Database. The anonymous user data has to be
        // copied to the non-anonymous user.
        var app = firebase.app();
        // Save anonymous user data first.
        return app
          .database()
          .ref("users/" + firebase.auth().currentUser.uid)
          .once("value")
          .then(function (snapshot) {
            data = snapshot.val();
            // This will trigger onAuthStateChanged listener which
            // could trigger a redirect to another page.
            // Ensure the upgrade flow is not interrupted by that callback
            // and that this is given enough time to complete before
            // redirection.
            return firebase.auth().signInWithCredential(cred);
          })
          .then(function (user) {
            // Original Anonymous Auth instance now has the new user.
            console.log(
              "Original Anonymous Auth instance now has the new user"
            );
            return app
              .database()
              .ref("users/" + user.uid)
              .set(data);
          })
          .then(function () {
            // Delete anonymnous user.
            console.log("Delete anonymnous user");
            return anonymousUser.delete();
          })
          .then(function () {
            // Clear data in case a new user signs in, and the state change
            // triggers.
            data = null;
            console.log("FirebaseUI will reset and the UI");
            // FirebaseUI will reset and the UI cleared when this promise
            // resolves.
            // signInSuccessWithAuthResult will not run. Successful sign-in
            // logic has to be run explicitly.
            // this.props.history.push("/");
          });
      },
    },
    // credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  };
  return (
    <div>
      {/* <button onClick={() => dispatch(setModel(true))}>Open Modal</button> */}
      <Modal onClose={() => dispatch(setModel(false))} show={ModelDisplay}>
        <p className={classes.loginTxt}>
          {" "}
          <i style={{ color: "white" }}>Fast & Free</i> <br />
          <b>Log in </b>
          or <b> Sign Up!</b>
        </p>
        <div className={classes.LoginContant}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>

        <p className={classes.loginpolicytxt}>
          By continuing, you are indicating that you accept our{" "}
          <Link href={`/terms-of-use`}>Terms of Service</Link> and{" "}
          <Link href={`/privacy-policy`}>Privacy Policy</Link>.
        </p>
      </Modal>
    </div>
  );
}

export default Login;
