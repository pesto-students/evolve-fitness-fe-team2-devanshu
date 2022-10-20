import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { Modal, Container } from "react-bootstrap";
import { setModel, ModelState } from "../../Redux/features/HeaderSlice";
import { useSelector, useDispatch } from "react-redux";
import { setActiveUser, setAdmin } from "../../Redux/features/UserSlice";
import GoogleImg from "../../assests/Login/Google.svg";
import classes from "./Login.module.css";
import LogoBlack from "../../assests/headerIcons/BlackLogo.png";
import { toast } from "react-toastify";

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
        dispatch(
          setModel({
            Model: false,
          })
        );
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DummyLogin = async () => {
    dispatch(
      setModel({
        Model: false,
      })
    );
    dispatch(
      setActiveUser({
        userId: "TDYHQyoxxWTHe4MkxW60DqLTuYM2",
        userName: "Demo",
        userEmail: "Demo@gmail.com",
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVybh3KjWrKdzfpH6NK6UpVxOrfU1_fJALkk9f9_H&s",
        isAnonymous: false,
      })
    );
    dispatch(
      setAdmin({
        isAdmin: 1,
      })
    );
    toast.success("Login successfully");
  };
  return (
    <Container>
      <Modal size="x" show={ModelShow.Model} onHide={() => HideModel()}>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <img src={LogoBlack} width={150} alt="logo" />
          </div>
          <div
            className={classes.LoginContainer}
            onClick={() => googleSignIn()}
          >
            <span>
              <img src={GoogleImg} alt={"google"} width={15} />
            </span>
            <span>Sign in with Google</span>
          </div>
          <div
            style={{ textAlign: "center" }}
            className={classes.LoginContainer}
            onClick={() => DummyLogin()}
          >
            Dummy Login
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Login;
