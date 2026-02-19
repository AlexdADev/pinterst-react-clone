import logo from "../../assets/pinterest.svg";

const HeaderLeft = () => {
  return (
    <div className="header-left">
      <a href="/" className="logo">
        <img src={logo} alt="Pinterest" />
      </a>
      <a className="nav active">Inicio</a>
      <a className="nav">Hoy</a>
    </div>
  );
};

export default HeaderLeft;
