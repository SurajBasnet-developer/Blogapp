import Footer from "./Footer";

const LearnPage = () => {
  const websites = [
    { id: 1, name: "CodeCademy", url: "https://www.codecademy.com)" },
    { id: 2, name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
    { id: 3, name: "Coursera", url: "https://www.coursera.org" },
    { id: 4, name: "W3Schools", url: "https://www.w3schools.com" },
    { id: 5, name: "SoloLearn ", url: "https://www.sololearn.com" },
    // Add more websites as needed
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl  mb-4  font-light">Learn Coding</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {websites.map((website) => (
          <div
            key={website.id}
            className="bg-white rounded shadow-md p-4 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{website.name}</h3>
            <p>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {website.url}
              </a>
            </p>
          </div>
        ))}
      </div>{" "}
      <hr /> <br />
      <Footer />
    </div>
  );
};

export default LearnPage;
