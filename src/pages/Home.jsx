import Masonry from "react-masonry-css";
import Card from "../components/Card/Card";
import Loader from "../components/Loader";

const Home = ({ photos, loader }) => {
  const breakpointColumnsObj = {
    default: 5,
    1400: 4,
    1000: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="feed">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {photos.map(photo => (
          <Card key={photo.id} item={photo} />
        ))}
      </Masonry>
      <Loader ref={loader} />
    </div>
  );
};

export default Home;
