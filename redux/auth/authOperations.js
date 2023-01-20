import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../FireBase";

import { saveUserProfile, stateChangeUser, logOutUser } from "./authSlice";
// REGISTR
const authSignUp =
  ({ email, password, name }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => console.log("Updated"));

      const { displayName, uid } = auth.currentUser;

      dispatch(saveUserProfile({ displayName, uid }));
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
// LOGIN
const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          const { displayName, uid } = user;
          dispatch(saveUserProfile({ displayName, uid }));
        }
      );
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
// LOGOUT
const authSignOut = () => async (dispatch, getState) => {
  await signOut(auth);

  dispatch(logOutUser());
};

// REFRESH
const authStateChanged = () => async (dispatch, getState) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid } = user;

        dispatch(saveUserProfile({ displayName, uid }));
        dispatch(stateChangeUser(true));
      }
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export { authSignIn, authSignUp, authSignOut, authStateChanged };
