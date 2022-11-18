import "./index.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const AddChapterDialog = ({closeModal, createChapter, editChapterDescription, editChapterTitle, setImage}) => {
  const [name, setName] = useState("لم يتم إختيار ملف");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (selectedFile?.name) {
      setName(selectedFile?.name);
      readFile(selectedFile);
    }
  });

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
          <h1>أضف فصل جديد</h1>
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
          <input dir="rtl" type="text" onChange={(e)=>{editChapterTitle(e.target.value)}} name="chapterName" id="chapterName" />
        </div>
        <div className="chapter-description">
          <label htmlFor="chapterDescription" className="inputLabel">
            وصف
          </label>
          <textarea onChange={(e)=>{editChapterDescription(e.target.value)}}
            dir="rtl"
            name="chapterDescription"
            id="chapterDescription"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="actions">
          <Button title="حفظ" className="actions-first-btn" type="filled" action={createChapter}/>
          <Button title="إلغاء" type="empty" action={closeModal}/>
        </div>
      </div>
    </div>
  );
};

export default AddChapterDialog;
