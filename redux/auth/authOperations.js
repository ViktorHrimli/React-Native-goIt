import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../FireBase/config";

import { saveUserProfile } from "./authSlice";

const authSignUp =
  ({ email, password, name }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => console.log("Updated"));

      const { displayName, uid } = auth.currentUser;

      console.log(auth.currentUser);

      dispatch(
        saveUserProfile({
          displayName,
          uid,
        })
      );
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((data) =>
        dispatch(saveUserProfile(data.user.uid))
      );
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
const authSignOut = () => async (dispatch, getState) => {
  signOut(auth).then((user) => console.log("User logOut"));
};

export { authSignIn, authSignUp, authSignOut };
