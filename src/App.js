import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Album from "./pages/Album";
import Nav from "./pages/Nav";
import "./app.css";
import { useState, useEffect } from "react";

function App() {
  let [artist, setArtist] = useState({
    "uuid": "",
    "albums": [],
    "name": "",
    "email": "",
    "about": "",
    "links": [],
    "image": ""
  });
  let [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_ALUMBS_URL + "/b9e0ac97-195c-4f92-8e78-a8368881d082"
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(
        process.env.REACT_APP_ARTISTS_URL + "/b9e0ac97-195c-4f92-8e78-a8368881d082"
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav name={artist.name} />}>
          <Route index element={<Home albums={albums} />} />
          <Route path="contact" element={<Contact artist={artist} />} />
          <Route path="about" element={<About artist={artist} />} />
          {albums.map((album) => (
            <Route
              key={album.name + " route"}
              path={"/album/" + album.url}
              element={<Album album={album} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
