import axios from "axios";

class LoginPageService {
  login() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3001/users") // JSON Server'daki users endpoint'i
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}

export default new LoginPageService();
