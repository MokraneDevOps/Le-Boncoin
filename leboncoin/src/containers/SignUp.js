import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <h2>Inscription</h2>
      <form>
        <label>Nom d'utilisateur :</label>
        <input type="text" />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
