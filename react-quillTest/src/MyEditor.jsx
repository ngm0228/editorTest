import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorTest } from './apis/test';

function MyEditor() {
  const [content, setContent] = useState('');
  const quillRef = useRef();
  const [test, setTest] = useState(true);


  const imageHandler = () => {
    console.log("이미지 핸들러 작동");
    console.log(content);
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      let imgUrl = "<img src='../public/tempImg/" + file.name + "'/>"
      console.log(imgUrl);
      
      setContent(imgUrl);

      editorTest(formData);
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

  const onClickTest = ()=>{
    setTest(test? false : true);
    console.log(test);
  }

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

  return (
    <>
    <img src="../public/tempImg/images.jpg" alt="test1" />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleChange}
        ref={quillRef}
      />
      <button onClick={()=>onClickTest()}>버튼이다</button>
    </>
  );
}

export default MyEditor;
