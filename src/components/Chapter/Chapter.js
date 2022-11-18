import './index.css';

const Chapter = ({title, image, description}) => {
  console.log(title);
  return (
    <div className="chapter">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Chapter