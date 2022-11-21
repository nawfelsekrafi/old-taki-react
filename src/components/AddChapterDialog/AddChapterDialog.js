import "./index.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const AddChapterDialog = ({item, deleteChatper,closeModal, createChapter, editChapterDescription, editChapterTitle, setImage, saveEditChapter}) => {
  const [name, setName] = useState("لم يتم إختيار ملف");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedFile?.name) {
      setName(selectedFile?.name);
      readFile(selectedFile);
    }
  });

  useEffect(()=>{
    if(item){
      setName(item.title);
      setTitle(item.title);
      editChapterTitle(item.title);
      setImgSrc(item.image);
      setImage(item.image);
      setDescription(item.description);
      editChapterDescription(item.description);
    }
  },[])
  const editTitle = (e)=> {
    editChapterTitle(e.target.value);
    setTitle(e.target.value);
  }
  const editDescription = (e)=> {
    editChapterDescription(e.target.value);
    setDescription(e.target.value);
  }

  const readFile = (file) => {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setImgSrc(reader.result);
        setImage(imgSrc);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="AddChapterDialog">
      <div className="container">
        <header>
          <h1>{title? 'تعديل بيانات الفصل': 'أضف فصل جديد' } </h1>
          <img src="assets/icons/close.svg" alt="close dialog" onClick={closeModal}/>
        </header>
        <div className="upload-pic">
          <img
            src={imgSrc ? imgSrc : "assets/icons/profile-pic-plus.svg"}
            alt=""
          />
          <div>
            <div className="upload-file">
              <label className="custom-file-upload">
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                اختر ملف
              </label>
              <span className="file-name">{name}</span>
            </div>
            <span className="max-size">JPEG or PNG Max Size of 500KB</span>
          </div>
        </div>
        <div className="chapter-name">
          <label htmlFor="chapterName" className="inputLabel">
            إسم الفصل
          </label>
          <input dir="rtl" type="text" value={title || ' '} onChange={(e)=>{editTitle(e)}} name="chapterName" id="chapterName" />
        </div>
        <div className="chapter-description">
          <label htmlFor="chapterDescription" className="inputLabel">
            وصف
          </label>
          <textarea  value ={description || ' '} onChange={(e)=>{editDescription(e)}}
            dir="rtl"
            name="chapterDescription"
            id="chapterDescription"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="actions">
          <Button title="حفظ" className="actions-first-btn" type="filled" action={item ? saveEditChapter : createChapter}/>
          {!item && <Button title="إلغاء" type="empty" action={closeModal}/>}
          {item && <Button title="حذف" type="delete" action={deleteChatper}/>}
        </div>
      </div>
    </div>
  );
};

export default AddChapterDialog;
