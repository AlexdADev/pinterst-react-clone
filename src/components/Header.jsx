import { useState } from "react";
import "./Header.css";

import logo from "../assets/pinterest.svg";
import bellIcon from "../assets/bell_3917256.svg";
import messageIcon from "../assets/facebook-messenger_6422198.svg";

import Search from "./Search";

const Header = ({ onSearch, setPage }) => {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    setPage(1);
    onSearch(value);
  };

  return (
    <header className="header">

      {/* LEFT */}
      <div className="header-left">

        <a href="/" className="logo">
          <img src={logo} alt="Pinterest" />
        </a>

        <a className="nav active">Inicio</a>
        <a className="nav">Hoy</a>

      </div>

      {/* CENTER */}
      <div className="header-search">
        <form className="search-box" onSubmit={handleSubmit}>
          <Search />
          <input
            type="search"
            placeholder="Buscar"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
        </form>
      </div>

      {/* RIGHT */}
      <div className="header-right">

        <div className="icon">
          <img src={bellIcon} alt="Notificaciones" />
        </div>

        <div className="icon">
          <img src={messageIcon} alt="Mensajes" />
        </div>

        <div className="avatar"></div>

      </div>

    </header>
  );
};

export default Header;
