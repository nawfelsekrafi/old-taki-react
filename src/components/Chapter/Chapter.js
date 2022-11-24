import "./index.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Chapter = ({ item, editChapter, toggleFavoriteChapter }) => {
  function edit(){
    return 1;
  }
  function toggle (){
    return 1;
  }
  return (
    <div className="chapter">
      {!item?.isFavorite && (
        <FavoriteBorderRoundedIcon className="favorite-icon-empty" onClick={()=>toggleFavoriteChapter(item.id)} />
      )}
      {item?.isFavorite && <FavoriteIcon className="favorite-icon-filled" onClick={()=>toggleFavoriteChapter(item.id)} />}
      <div onClick={() => editChapter(item)}>
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Chapter;
