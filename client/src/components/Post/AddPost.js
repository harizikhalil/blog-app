import React, { useState } from "react";
import ReactQuill from "../editor/QuillEditor";
import axios from "axios";
import { useSelector } from "react-redux";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const AddPost = ({ history }) => {
  const user = useSelector((state) => state.authReducer.user);
  const [body, setBody] = useState("");
  const [formData, setForm] = useState({
    title: "",
    description: "",
  });
  const [files, setFiles] = useState([]);
  const onEditorChange = (e) => {
    console.log(e);
    setBody(e);
  };
  const onFilesChange = (files) => {
    setFiles(files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: formData.title,
      description: formData.description,
      content: body,
      writer: user._id,
    };
    console.log("body :", body);
    console.log("formdata", formData);
    try {
      await axios.post("/api/blog/addPost", data);

      alert("post ajouter");
      setTimeout(() => {
        history.push("/blog");
      }, 2000);
    } catch (error) {
      const response = error.response.data;
      if (Array.isArray(response)) {
        response.forEach((err) => {
          alert(err.msg);
        });
      }
    }
    setForm({
      title: "",
      description: "",
    });
  };
  const handleChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });
  return (
    <div>
      <div className="form-input">
        <p>Title</p>
        <input
          type="text"
          placeholder="add title"
          className="input_text text-back"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <br />
        <p>Description</p>
        <input
          type="text"
          className="input_text text-back"
          placeholder="add description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <br />
      </div>
      <ReactQuill
        placeholder="write something"
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      <div style={{ textAlign: "center", margin: "2rem" }}>
        <button className="btn-add-post" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default AddPost;
