import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader'; // 이미지 업로드 모듈 임포트

// 이미지 업로드 모듈을 Quill에 추가
ReactQuill.Quill.register('modules/imageUploader', ImageUploader);

const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    },
    imageUploader: { // 이미지 업로드 모듈을 사용하도록 설정
      upload: file => handleImageUpload(file),
    }
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const handleImageUpload = async (file) => {
    console.log(file);
    setEditorHtml(file);
  };

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MyEditor />
    </div>
  );
}

export default App;
