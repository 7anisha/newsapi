

// import React, { useState, useEffect } from "react";
// import { Card, Button } from "antd";
// import axios from "axios";
// import "./App.css";

// const { Meta } = Card;

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const loadNews = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57e509d82c1c4167a28daff6abc65344"
//         );
//         setNews(response.data.articles);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadNews();
//   }, []);

//   return (
//     <div className="App">
//       <header>
//         <nav className="navbar">
//           <div className="logo">News App</div>
//           <div className="nav-links">
//             <a href="#">Home</a>
//             <a href="#">Categories</a>
//             <a href="#">About</a>
//             <a href="#">Contact</a>
//             <a href="#" className="btn btn-signup">Sign Up</a>
//             <a href="#" className="btn btn-login">Login</a>
//           </div>
//         </nav>
//       </header>
//       <main>
//         <div className="headline-section">
//           <h2>Latest Headlines</h2>
//           <div className="headline-container">
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//             {news &&
//               news.slice(0, 13).map((item, index) => (
//                 <Card
//                   key={index}
//                   hoverable
//                   style={{ width: "100%", marginBottom: "20px" }}
//                   cover={<img alt="image" src={item.urlToImage} />}
//                 >
//                   <Meta title={item.title} description={item.content} />
//                   <p>Source: {item.source.name}</p>
//                   <p>Published At: {item.publishedAt}</p>
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button type="primary" style={{ marginTop: "10px" }}>
//                       Read More
//                     </Button>
//                   </a>
//                 </Card>
//               ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "./App.css";

const { Meta } = Card;

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57e509d82c1c4167a28daff6abc65344"
        );
        setNews(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <div className="App">

      
      <header className="header">
        <div className="container">
          <div className="logo">News App</div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="btn btn-signup">Sign Up</a>
            <a href="#" className="btn btn-login">Login</a>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <h1 className="main-title">Stay Updated with the Latest News</h1>
          <div className="headline-container">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {news &&
              news.slice(0, 13).map((item, index) => (
                <Card
                  key={index}
                  hoverable
                  className="news-card"
                  cover={<img alt="image" src={item.urlToImage} />}
                >
                  <Meta title={item.title} />
                  <p className="source">Source: {item.source.name}</p>
                  <p className="published">Published At: {item.publishedAt}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More
                  </a>
                </Card>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

