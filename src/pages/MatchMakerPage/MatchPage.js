import React from "react";
import { useLocation, Link } from "react-router-dom";

const MatchPage = () => {
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <div>
      {console.log(matches)}
      <h1>Matched Dogs</h1>
      {matches.length > 0 ? (
        <ul>
          {matches.map((dog, index) => {
            console.log(`Rendering dog with ID: ${dog.id}`);
            return (
              <li key={dog.id || index}>
                <Link to={`/dog/${dog.id}`}>{dog.name}</Link>

                {dog.images &&
                  dog.images.map((image, imgIndex) => (
                    <img key={imgIndex}
                      src={image.imageSrc}
                      alt={image.title}
                      width="250"
                    />
                  ))}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default MatchPage;
