import "./styles/App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { useUnsplashSearch } from "./hooks/useUnsplashSearch";

function App() {
  const { photos, setQuery, setPage, loader } = useUnsplashSearch("cat");

  return (
    <div className="container">
      <Header onSearch={setQuery} setPage={setPage} />
      <Home photos={photos} loader={loader} />
    </div>
  );
}

export default App;
