import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SimpleUpload from "./SimpleUpload"; // Import unique
import "./Publish.css";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [filesPhoto, setFilesPhoto] = useState([]); // Array of files
  const [error, setError] = useState(""); // State for error message
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state
  const navigate = useNavigate();
  const store_id = "1"; // valeur à ajuster
  const username = "VotreNom"; // pour tester, remplacez par un nom fixe

  const apiUrl = "https://votre-api.com"; // Remplacez par votre API réelle

  const handleSubmit = async (event) => {
    event.preventDefault(); // annule le comportement par défaut du formulaire
    setIsSubmitting(true); // Start submitting

    try {
      const data = new FormData(); // crée une instance de FormData
      data.append("title", title); // ajoute les données du formulaire
      data.append("description", description);
      data.append("price", price);
      data.append("store_id", store_id);
      data.append("creator", username);

      filesPhoto.forEach((filePhoto) => {
        data.append("files[]", filePhoto); // Ajoute les fichiers si disponibles
      });

      const response = await axios.post(`${apiUrl}/product`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Affichage du toast de succès et redirection
      alert("L'offre a été postée avec succès !");
      navigate("/home"); // Redirection vers la page d'accueil après la soumission
    } catch (error) {
      setError("Erreur lors de la publication de l'offre. Veuillez réessayer.");
      console.error(error.message);
    } finally {
      setIsSubmitting(false); // End submitting
    }
  };

  return (
    <div className="publish">
      <h2>Publier une Offre</h2>
      {error && <div className="error-message">{error}</div>} {/* Affichage de l'erreur */}

      <form onSubmit={handleSubmit} className="publish-form">
        <div className="input-group">
          <label htmlFor="title">Titre</label>
          <input
            id="title"
            type="text"
            placeholder="Titre de l'offre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description de l'offre"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="price">Prix (€)</label>
          <input
            id="price"
            type="number"
            placeholder="Prix de l'offre"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Ajouter des photos</label>
          <SimpleUpload
            loadFiles={(photos) => {
              setFilesPhoto(photos);
            }}
          />
        </div>

        <div className="submit-group">
          <input type="submit" value="Publier l'Offre" disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default Publish;
