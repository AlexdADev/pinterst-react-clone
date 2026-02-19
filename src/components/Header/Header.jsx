import "./Header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderSearch from "./HeaderSearch";
import HeaderRight from "./HeaderRight";

const Header = ({ onSearch, setPage }) => {
  return (
    <header className="header">
      <HeaderLeft />
      <HeaderSearch onSearch={onSearch} setPage={setPage} />
      <HeaderRight />
    </header>
  );
};

export default Header;
