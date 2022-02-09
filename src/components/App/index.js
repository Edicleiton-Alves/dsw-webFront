import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Edit,
  Add,
  List,
  FindById,
  ListAllGames,
  ListGamesById,
} from "../Category/index";
import { Login } from "../User/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link className="navbar-brand" to={"/user"}>
          Login
        </Link>
        <div className="navbar-nav mr-auto center">
          <li className="nav-item">
            <Link to={Login() ? "/category" : "#"} className="nav-link">
              Produtos por Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/gameId"} className="nav-link">
              Produto por ID da Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adicionar Categoria
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/games/all"} className="nav-link">
              Produtos
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/games/id"} className="nav-link">
              Produtos por ID
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/user"]} component={Login} />
          <Route exact path={"/category"} component={List} />
          <Route exact path="/gameId" component={FindById} />
          <Route exact path="/add" component={Add} />
          <Route path="/category/:id" component={Edit} />
          <Route path="/games/id" component={ListGamesById} />
          <Route path="/games/all" component={ListAllGames} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
