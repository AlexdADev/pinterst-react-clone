import bellIcon from "../../assets/bell.svg";
import messageIcon from "../../assets/message.svg";

const HeaderRight = () => {
  return (
    <div className="header-right">
      <div className="icon">
        <img src={bellIcon} alt="Notificaciones" />
      </div>
      <div className="icon">
        <img src={messageIcon} alt="Mensajes" />
      </div>
      <div className="avatar"></div>
    </div>
  );
};

export default HeaderRight;
