import React, { useState } from "react";
import UserDataService from "../../../services/User/index";
import { TOKEN_KEY } from "../../../services/shared/api";

const Login = (props) => {
  const [user, setUser] = useState({ id: null, login: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const sendLogin = () => {
    const elementErro = document.getElementById('alert');

    var data = {
      login: user.login,
      password: user.password,
    };

    UserDataService.login(data)
      .then((response) => {
        localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
        console.log(TOKEN_KEY + ": " + localStorage.getItem(TOKEN_KEY));
        props.history.push("/category");
        elementErro.classList.remove('show');
      })
      .catch((e) => {
        elementErro.classList.add('show');
      });
  };

  return (
    <div class="row">
      <div className="form-group col-md-6">
        <label htmlFor="name">Usuário</label>
        <input
          type="text"
          className="form-control"
          id="login"
          required
          value={user.login}
          onChange={handleInputChange}
          name="login"
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="name">Senha</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={user.password}
          onChange={handleInputChange}
          name="password"
        />
      </div>

      <div className="form-group col align-self-center">
        <button onClick={sendLogin} className="btn btn-primary btn-lg btn-block">
          Entrar
        </button>
      </div>

      <div class="alert alert-warning alert-dismissible fade" role="alert" id="alert">
        <strong>Usuário inválido!</strong> Tente novamente.
      </div>
    </div>
  );
};

export default Login;
