import { useState } from "react";
import axios from "axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://testapi-wdiw.onrender.com/posts",
        {
          title,
          content,
        }
      );
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md p-8 mt-10"
      >
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className="border border-gray-300 rounded px-3 py-2 w-full h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
