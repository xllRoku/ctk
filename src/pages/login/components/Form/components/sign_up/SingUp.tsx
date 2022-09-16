const SingUp = () => {
  return (
    <div className="container-sign">
      <div className="container-form-sing">
        <p>o usa tú cuenta de email para registrarte</p>
        <form className="form-sign">
          <div className="username">
            <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" />
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="email">
            <img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="password">
            <img src="https://img.icons8.com/material-outlined/24/000000/password.png" />
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="container-sign">
            <input type="submit" value="Registrate" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
