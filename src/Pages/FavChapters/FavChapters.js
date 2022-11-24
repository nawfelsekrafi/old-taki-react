import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import Chapter from "../../components/Chapter/Chapter";
import { useState, useEffect } from "react";
import { fetchChapters } from "../../slices/chapters";
const FavChapters = () => {
  const [chapters, setChapters] = useState(
    useSelector((state) =>
      state.chapters.chapters.filter((el) => el.isFavorite)
    )
  );
  const { status, error } = useSelector((state) => state.chapters);
  const dispatch = useDispatch();
  const fetch_Chapters = () => {
    dispatch(fetchChapters());
  };
  useEffect(() => {
    if (status === "idle") {
      fetch_Chapters();
    }
  }, [status]);
  return (
    <div className="page">
      <div className="content-header-fav">
        <h1> الفصول المفضلة</h1>
      </div>
      <div className="chapters">
        {chapters.map((item, index) => {
          return <Chapter item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FavChapters;
