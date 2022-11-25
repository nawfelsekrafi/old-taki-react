import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import Chapter from "../../components/Chapter/Chapter";
import { useState, useEffect } from "react";
import { fetchChapters } from "../../slices/chapters";
import { toggleLikeChapter } from "../../slices/chapters";
const FavChapters = () => {
  let { status, error, chapters } = useSelector((state) => state.chapters);
  const dispatch = useDispatch();

  const fetch_Chapters = () => {
    dispatch(fetchChapters());
  };
  const toggleFavoriteChapter = (id) => {
    dispatch(toggleLikeChapter(id));
  };

  useEffect(() => {
    if (status === "idle") {
      fetch_Chapters();
    }
  }, [status]);

  if (status == "loading") {
    return (
      <div className="page">
        <div className="content-header-fav">
          <h1>جاري التحميل ...</h1>
        </div>
      </div>
    );
  }
  if (status == "succeeded")
  chapters = chapters.filter((ch) => ch.isFavorite);
  return (
    <div className="page">
      <div className="content-header-fav">
        <h1> الفصول المفضلة</h1>
      </div>
      <div className="chapters">
        {chapters.map((item, index) => {
          return <Chapter item={item} key={index}    toggleFavoriteChapter={toggleFavoriteChapter}/>;
        })}
      </div>
    </div>
  );
};

export default FavChapters;
