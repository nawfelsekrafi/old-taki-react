import "./index.css";
import FilledButton from "../../components/FilledButton/FilledButton";
import data from '../../data';
import Chapter from '../../components/Chapter/Chapter';
const Chapters = () => {
  return (
    <div className="page">
      <div className="content-header">
        <FilledButton text="أضف فصل جديد" />
        <h1>الفصول</h1>
      </div>
      <div className="chapters">
        {data.map((item, index)=>{
          return (
            <Chapter {...item} key={index}/>
          )
        })}
      </div>
    </div>
  );
};

export default Chapters;
