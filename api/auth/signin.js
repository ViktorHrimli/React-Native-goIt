import axios from "axios";

import { saveUserProfile } from "../../redux/auth/authSlice";

class SignInUser {
  async createUser(input) {
    try {
      await axios
        .post("http://192.168.1.107:5000/api/signin", input)
        .then(({ data }) => console.log(data))
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error.message);
    }
  }
}

export { SignInUser };
