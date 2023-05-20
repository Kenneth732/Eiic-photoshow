import React, { useEffect, useState } from "react";

function App() {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    fetch('/photographers')
      .then((res) => res.json())
      .then((dataArrays) => {
        setPhotographers(dataArrays)
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {photographers.map((photographer) => (
        <ul key={photographer.id}>
          <h2>{photographer.name}</h2>
          <h2>{photographer.birthplace}</h2>

          {/* Accessing the nested photo data */}
          {photographer.photos.map((photo) => (
            <ul key={photo.id}>
              <li>{photo.title}</li>
              <img src={photo.image_url} alt="name"/>
              <li> {photo.category}</li>
              <li> {photo.description}</li>
            </ul>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default App;
