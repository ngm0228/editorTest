import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorTest, imgDelete, imgMove } from './apis/test';

function MyEditor() {
  const [content, setContent] = useState('');
  const quillRef = useRef();
  const [imgList, setImgList] = useState([]);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      const result = await editorTest(formData);

      // let imgUrl = "<img src='../public/tempImg/" + file.name + "'/>"
      let imgTag = `<img src="../public/tempImg/${result}" alt="${result}"/>`;
      
      setContent(prevContent => prevContent + imgTag);

      // const newList = [...imgList];
      // newList.push(result);
      setImgList(imgList => [...imgList, result]);
    }
  }



  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' },
          { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image', 'video'],
          ['clean']
        ],
        handlers: {
          image: imageHandler
        },
      },
    }
  }, [])


  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const handleChange = (content) => {
    setContent(content);
    console.log(content);
  };

  const insert = () => {
    let moveList = [];
    let deleteList = [];

    imgList.forEach((item) => {
      if(content.indexOf(item) !== -1) {
        moveList.push(item);
      } else {
        deleteList.push(item);
      }
    })

    if (moveList !== "") {
      imgMove(moveList);
    }
    if (deleteList !== "") {
      imgDelete(deleteList);
    }

  }

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleChange}
        ref={quillRef}
      />
      <button onClick={insert}>작성</button>
    </>
  );
}

export default MyEditor;
