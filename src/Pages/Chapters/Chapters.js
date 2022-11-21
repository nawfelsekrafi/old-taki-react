import "./index.css";
import Button from "../../components/Button/Button";
import data from "../../data";
import Chapter from "../../components/Chapter/Chapter";
import AddChapterDialog from "../../components/AddChapterDialog/AddChapterDialog";
import { useState } from "react";

const Chapters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapters, setChapters] = useState(data);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [itemToEdit, SetItemToEdit] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setImage(null);
    setDescription(null);
    setTitle(null);
    SetItemToEdit(null);
    setIsModalOpen(false);
  };

  const saveEditChapter = ()=>{
    let index = chapters.indexOf(itemToEdit);
    let chapter ={
      title: title,
      image: image,
      description: description,
    }
    console.log(chapter)
    chapters[index] = chapter;
    setChapters(chapters);
    closeModal();
  }

  const createChapter = () => {
    let newChapter = {
      title: title,
      image: image,
      description: description,
    };

    setChapters((chapters)=>{
      return [...chapters, newChapter]
    })
    closeModal();
    
  };

  const editChapterTitle = (value) => {
    setTitle(value);
  };

  const editChapterDescription = (value) => {
    setDescription(value);
  };
  const editChapter = (item) => {
    SetItemToEdit(item);
    openModal();
  }
  const deleteChatper = () =>{
    setChapters((chapters)=>{
      return chapters.filter((item)=> item !== itemToEdit) ;
    });
    closeModal();
  }

  return (
    <div className="page">
      <div className="content-header">
        <Button title="أضف فصل جديد" type="filled" action={openModal} />
        <h1>الفصول</h1>
      </div>
      <div className="chapters">
        {chapters.map((item, index) => {
          return <Chapter item={item} key={index} editChapter={editChapter}/>;
        })}
      </div>
      {isModalOpen && (
        <AddChapterDialog
          item={itemToEdit}
          editChapterDescription={editChapterDescription}
          editChapterTitle={editChapterTitle}
          setImage={setImage}
          closeModal={closeModal}
          createChapter={createChapter}
          saveEditChapter={saveEditChapter}
          deleteChatper={deleteChatper}
        />
      )}
    </div>
  );
};

export default Chapters;
