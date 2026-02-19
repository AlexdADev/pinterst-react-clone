import { useState, useEffect, useRef } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "es0EJP0lLLGPjwFm9FJZj_MXwpIZzLdJsgCFxtOo8T0" 
});

export const useUnsplashSearch = (initialQuery = "cat") => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadPhotos = (search, pageNum) => {
    api.search.getPhotos({ query: search, perPage: 30, page: pageNum })
      .then(result => {
        if (!result.response) return;
        setPhotos(prev =>
          pageNum === 1 ? result.response.results : [...prev, ...result.response.results]
        );
      })
      .catch(() => console.log("error loading images"));
  };

  useEffect(() => { loadPhotos(query, page); }, [query, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setPage(prev => prev + 1);
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return { photos, setQuery, setPage, loader };
};
