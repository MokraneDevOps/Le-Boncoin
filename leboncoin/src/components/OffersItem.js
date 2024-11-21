import React from "react";
import "./OffersItem.css";

const OffersItem = ({ created_at, photos, price, title }) => {
  const created = new Date(created_at);

  return (
    <div className="offersitem">
      <picture>
        {photos[0] && <img src={photos[0].url} alt={title} />}
      </picture>
      <nav>
        <span>{title}</span>
        <span>{price} €</span>
        <span>
          Annonce créée le {created.getDate()}/{created.getMonth() + 1}/
          {created.getFullYear()} à {created.getHours()}h{created.getMinutes()}mn
        </span>
      </nav>
    </div>
  );
};

export default OffersItem;
