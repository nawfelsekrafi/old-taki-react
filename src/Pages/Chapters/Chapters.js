import "./index.css";
import Button from "../../components/Button/Button";
import data from '../../data';
import Chapter from '../../components/Chapter/Chapter';
import AddChapterDialog from '../../components/AddChapterDialog/AddChapterDialog';
import { useState } from "react";

const Chapters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () =>{
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
    <div className="page">
      <div className="content-header">
        <Button title="أضف فصل جديد" type="filled" action={openModal}/>
        <h1>الفصول</h1>
      </div>
      <div className="chapters">
        {data.map((item, index)=>{
          return (
            <Chapter {...item} key={index}/>
          )
        })}
      </div>
      {
          isModalOpen && <AddChapterDialog closeModal={closeModal} /> 
      }
    
    </div>
  );
};

export default Chapters;
