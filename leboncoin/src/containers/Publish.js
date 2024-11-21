import React from "react";

const Publish = () => {
  return (
    <div className="publish">
      <h2>Publier une annonce</h2>
      <form>
        <label>Titre :</label>
        <input type="text" />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default Publish;
