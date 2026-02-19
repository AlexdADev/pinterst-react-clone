import { useState } from "react";
import Search from "../Search/Search";

const HeaderSearch = ({ onSearch, setPage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setPage(1);
    onSearch(value);
  };

  return (
    <div className="header-search">
      <form className="search-box" onSubmit={handleSubmit}>
        <Search />
        <input
          type="search"
          placeholder="Buscar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
