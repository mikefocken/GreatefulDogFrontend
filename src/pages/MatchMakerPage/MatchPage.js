import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./MatchPage.css";
const MatchPage = () => {
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <div class="return">
      {console.log(matches)}
      <h1>Matched Results</h1>
      {matches.length > 0 ? (
        <ul>
          <div class="flex-container1">
            {matches.map((dog, index) => {
              console.log(`Rendering dog with ID: ${dog.id}`);
              return (
                <li key={dog.id || index}>
                  <div className="image-container">
                    {dog.images &&
                      dog.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image.imageSrc}
                          alt={image.title}
                          width="250"
                          height="230"
                        />
                      ))}
                  </div>
                  <div className="name-container">
                    <Link to={`/dog/${dog.id}`}>{dog.name}</Link>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default MatchPage;
