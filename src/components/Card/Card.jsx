import DownloadButton from "../DownloadButton";
import "./Card.css";


const Card = ({ item }) => {
  // Filtrar solo imágenes gratuitas (Unsplash ya ofrece imágenes libres de uso)
  const isFree = item?.premium === false || !item?.premium;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={item.urls.small}
          alt={item.alt_description || "Imagen"}
          loading="lazy"
        />
        <button className="btn-save">Guardar</button>
        {isFree && <DownloadButton url={item.links.download} />}
      </div>
    </div>

  );
};
export default Card;