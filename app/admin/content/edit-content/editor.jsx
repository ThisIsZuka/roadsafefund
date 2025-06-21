'use client';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export default function MyEditor() {
  const handleChange = (content) => {
    console.log('Content HTML:', content); // บันทึก content html ได้
  };

  return (
    <SunEditor
      height="300px"
      width='100%'
      placeholder="เริ่มเขียนเนื้อหาที่นี่..."
      onChange={handleChange}
      setOptions={{
        buttonList: [
          ['undo', 'redo'],
          ['formatBlock'],
          ['bold', 'italic', 'underline', 'strike'],
          ['fontSize', 'fontColor', 'hiliteColor'],
          ['align', 'list', 'table'],
          ['link', 'image', 'video'],
          ['codeView'],
        ],
      }}
    />
  );
}