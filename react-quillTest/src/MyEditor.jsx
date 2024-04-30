import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Snow 테마 사용

function MyEditor() {
  const [content, setContent] = useState('');
  const quillRef = useRef();

  const imageHandler = () => {
    console.log("이미지 핸들러 작동");
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
          {'indent': '-1'}, {'indent': '+1'}],
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

  return (
    <ReactQuill 
      theme="snow" 
      modules={modules}
      formats={formats}
      value={content} 
      onChange={handleChange}
      ref={quillRef}
    />
  );
}

export default MyEditor;
