import React, { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const { pseudo, email, password, confirmPassword } = userData;
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="fromBoxRight">
          <div className="formContent">
            <form>
              <h2>Inscription</h2>
              <div className="inputBox">
                <input
                  type="text"
                  id="pseudo"
                  required
                  value={pseudo}
                  onChange={handleChange}
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={handleChange}
                />
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
