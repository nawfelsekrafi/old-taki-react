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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createChapter = () => {
    let newChapter = {
      title: title,
      image: image,
      description: description,
    };

    setChapters((chapters)=>{
      return [...chapters, newChapter]
    })
    setImage(null);
    setDescription(null);
    setTitle(null);
    setIsModalOpen(false)
  };

  const editChapterTitle = (value) => {
    setTitle(value);
  };

  const editChapterDescription = (value) => {
    setDescription(value);
  };
  // const EditChapter =() => {

  // }

  return (
    <div className="page">
      <div className="content-header">
        <Button title="أضف فصل جديد" type="filled" action={openModal} />
        <h1>الفصول</h1>
      </div>
      <div className="chapters">
        {chapters.map((item, index) => {
          return <Chapter {...item} key={index} />;
        })}
      </div>
      {isModalOpen && (
        <AddChapterDialog
          editChapterDescription={editChapterDescription}
          editChapterTitle={editChapterTitle}
          setImage={setImage}
          closeModal={closeModal}
          createChapter={createChapter}
        />
      )}
    </div>
  );
};

export default Chapters;
