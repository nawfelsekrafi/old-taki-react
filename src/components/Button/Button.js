import './index.css';

const Button = ({title, type, action}) => {
  
  return (
    <button className={type} onClick={action}>
        {title}
    </button>
  )
  Button.defaultProps = {
    title: "undefined",
    type: "empty",
  }
}

export default Button