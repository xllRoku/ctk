import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container-sign">
      <div className="container-form-sing">
        <p>o usa tú cuenta de email</p>
        <form className="form-sign">
          <div className="email">
            <img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="password">
            <img src="https://img.icons8.com/material-outlined/24/000000/password.png" />
            <input type="password" placeholder="Contraseña" />
          </div>
          <Link to="/">
            <p>Olvidó su contraseña?</p>
          </Link>
          <div className="container-sign">
            <input type="submit" value="Inicia sesion" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
