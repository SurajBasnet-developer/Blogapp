import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPostById = async (postId) => {
  const response = await axios.get(
    `https://testapi-wdiw.onrender.com/posts/${postId}`
  );
  return response.data;
};

const ViewPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["post", id], () =>
    fetchPostById(id)
  );

  console.log("Data:", data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data.</p>;
  }

  const [postId, title, content] = data;

  return (
    <div className="container mx-auto">
      <div className="max-w-lg mx-auto bg-white shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2> <hr />
        <p className="text-gray-700">{content}</p>
        <Link to="/">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewPage;
