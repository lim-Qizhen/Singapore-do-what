import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Plan from "./components/Plan";

function App() {
  /////Background Image/////
  const backgroundImages = [
    "https://www.visitsingapore.com/editorials/singapore-most-iconic-landmarks/jcr:content/par/mobile_21_content_sl/sliderccpar1/editorial_generic_co.thumbnail.overview-image.1460.822.jpg",
    "https://admin.itsnicethat.com/images/K7u3UCGdi4sJjLDhqZp-FrJ_qqM=/2569/format-webp%7Cwidth-1440/5a1545387fa44c187f001c56.jpg",
    "https://admin.itsnicethat.com/images/1B2Dtdp0s6EFe0tmLDbttdanViE=/2577/format-webp%7Cwidth-1440/5a1546137fa44c187f001c6d.jpg",
    "https://www.juxtapoz.com/media/k2/galleries/62447/tumblr_n3ktafKXR71rrft0ho1_1280.jpg",
    "https://www.juxtapoz.com/media/k2/galleries/62447/tumblr_nhaqf9BWLK1rrft0ho1_1280.jpg",
    "https://allabout.city/singapore/wp-content/uploads/2021/02/Picnic-Spots-in-Singapore-Singapore-Tuas-Lalang-Field-1.jpg",
  ];

  const webpageStyles = {
    backgroundImage: `url(${
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
    })`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundSize: "cover",
  };

  /////Retrieving Search Results/////
  const [results, setResults] = useState([]);

  const fetchAttractions = async (url) => {
    try {
      const res = await fetch(url);
      const attractions = await res.json();
      setResults(attractions.data);
      //console.log(attractions.data);
    } catch (err) {
      alert(err.message);
    }
  };
  const [userInput, setUserInput] = useState("");
  const retrieveData = (input) => {
    const baseURL = `https://tih-api.stb.gov.sg/content/v1/attractions/search?keyword=${input}&sortBy=name&sortOrder=asc&language=en&apikey=AALYYjcafVG4UE8jddwk7OeqnWAvgluD`;
    fetchAttractions(baseURL);
    setHasSearched(true);
    setUserInput(input);
  };
  const [hasSearched, setHasSearched] = useState(false);

  /////Retrieving Liked activities for Plan
  const [wishlist, setWishlist] = useState(["activity1", "activity2"]);

  return (
    <body style={webpageStyles}>
      <div >
        <BrowserRouter>
          <NavBar />
          <Route exact path="/">
            <Home onClick={setHasSearched}/>
          </Route>
          <Route exact path="/search">
            {hasSearched ? (
              <SearchResults
                onSubmit={retrieveData}
                results={results}
                user={userInput}
              />
            ) : (
              <Search onSubmit={retrieveData} />
            )}
          </Route>
          <Route path="/search/:name">
            <Details results={results} user={userInput} />
          </Route>
          <Route path = "/plan">
            <Plan wishlist = {wishlist}></Plan>
          </Route>
        </BrowserRouter>
      </div>
      <br/>
    </body>
  );
}

export default App;
