import React, { useState } from "react";

const Carrousel = ({ photos }) => {
  const [imgNum, setImgNum] = useState(0); // Index de l'image active
  const totalImages = photos.length; // Nombre total d'images

  // Fonction pour aller à l'image précédente
  const handlePrev = () => {
    setImgNum((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  // Fonction pour aller à l'image suivante
  const handleNext = () => {
    setImgNum((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carrousel">
      {/* Image principale */}
      <button className="nav-btn prev" onClick={handlePrev}>
        ‹
      </button>
      <img src={photos[imgNum]?.url} alt={`Image ${imgNum + 1}`} />
      <button className="nav-btn next" onClick={handleNext}>
        ›
      </button>

      {/* Aperçus */}
      <div className="previews">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setImgNum(index)}
            className={index === imgNum ? "active" : ""}
          >
            <img src={photo?.url} alt={`Aperçu ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
