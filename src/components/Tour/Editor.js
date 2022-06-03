import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  const [addData, setAddData] = useState("");
  const [addedData, setAddedData] = useState(0);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setAddData(data);
  };
  return (
    <div>
      <h2>
        <u>NHẬP THÔNG TIN MÔ TẢ CHI TIẾT TOUR</u>
      </h2>
      <div
        style={{ width: "700px", display: "inline-block", textAlign: "left" }}
      >
        <div
          style={{
            width: "700px",
            display: "inline-block",
            textAlign: "right",
            marginBottom: "5px",
          }}
        >
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setAddedData(!addedData)}
          >
            {addedData ? "Hide Data" : "Show Data"}
          </button>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={addData}
          onChange={handleChange}
        />
      </div>
      <div>{addedData ? addData : ""}</div>
    </div>
  );
};

export default Editor;
