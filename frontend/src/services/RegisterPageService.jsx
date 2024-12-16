import axios from "axios";

class RegisterPageService {
  register(userData) {
    return axios.post("http://localhost:3001/users", userData);
  }
}

export default new RegisterPageService();
