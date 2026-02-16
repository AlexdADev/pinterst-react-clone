import "./Card.css";

const Card = ({ item }) => {

  return (
    <div className="item">

      <div className="image">

        <img
          src={item.urls.small}
          alt={item.alt_description}
        />

        <a className="btn-save">Guardar</a>

      </div>

      <div className="pin-info">
        <img
          className="user"
          src={item.user.profile_image.small}
          alt={item.user.name}
        />
        <span>{item.user.name}</span>
      </div>

    </div>
  );
};

export default Card;
