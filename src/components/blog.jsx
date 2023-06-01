import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const fetchData = async () => {
  const response = await axios.get("https://testapi-wdiw.onrender.com/posts");
  return response.data;
};

const Blog = () => {
  const { data, isLoading, isError } = useQuery("posts", fetchData);

  console.log("Is Loading:", isLoading);
  console.log("Is Error:", isError);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data.</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Dynamic Cards */}
        {data.map((post) => {
          const postId = post[0];
          const title = post[1];
          const content = post[2];

          return (
            <div key={postId} className="max-w-sm bg-base-100 shadow-xl">
              <figure>
                <img
                  src={`https://picsum.photos/200/300?random=${postId}`}
                  alt={title}
                />
              </figure>
              <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p>{content}</p>
                <div className="flex justify-end mt-4">
                  <Link to={`/view/${postId}`}>
                    <button className="btn btn-primary">View</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
