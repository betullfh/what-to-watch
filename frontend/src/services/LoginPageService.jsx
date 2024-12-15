import axios from 'axios';

class LoginPageService {
  login() {
    return new Promise((resolve, reject) => {
      axios
        .get("/users")
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}

export default new LoginPageService();
