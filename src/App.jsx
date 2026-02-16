import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./components/Header";
import Masonry from "@mui/lab/Masonry";
import Card from "./components/Card";

import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "es0EJP0lLLGPjwFm9FJZj_MXwpIZzLdJsgCFxtOo8T0"
});

function App() {

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cat");
  const [page, setPage] = useState(1);

  const loader = useRef(null);

  // 🔥 cargar fotos
  const loadPhotos = (search, pageNum) => {
    api.search
      .getPhotos({
        query: search,
        perPage: 30,
        page: pageNum
      })
      .then(result => {

        if (!result.response) return;

        if (pageNum === 1) {
          setPhotos(result.response.results);
        } else {
          setPhotos(prev => [
            ...prev,
            ...result.response.results
          ]);
        }
      })
      .catch(() => console.log("error loading images"));
  };

  // búsqueda o cambio de página
  useEffect(() => {
    loadPhotos(query, page);
  }, [query, page]);

  // 🔥 scroll infinito
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">

      <Header onSearch={setQuery} setPage={setPage} />

      <div className="feed">
        <Masonry columns={4} spacing={2}>
          {photos.map(photo => (
            <Card key={photo.id} item={photo} />
          ))}
        </Masonry>

        {/* detector scroll */}
        <div ref={loader} style={{ height: "60px" }} />
      </div>

    </div>
  );
}

export default App;
