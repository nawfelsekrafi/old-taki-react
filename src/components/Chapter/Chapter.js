import './index.css';

const Chapter = ({item, editChapter}) => {
  return (
    <div className="chapter" onClick={()=>editChapter(item)}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  )
}

export default Chapter