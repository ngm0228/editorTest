import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Snow 테마 사용

function MyEditor() {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const imageHandler = () => {
    console.log("이미지 핸들러 작동");
  }

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const handleChange = (content) => {
    setContent(content);
  };

  return (
    <ReactQuill 
      theme="snow" 
      modules={modules}
      formats={formats}
      value={content} 
      onChange={handleChange} 
    />
  );
}

export default MyEditor;
