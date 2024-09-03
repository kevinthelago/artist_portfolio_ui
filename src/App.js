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
    name: "Some Lady",
    email: "somelady90@gmail.com",
    about:
      "Some Lady is an artist living and working in San Francisco. She received her BA in Studio Arts from CalPoly Humboldt, along with her post baccalaureate in Museum & Gallery Practices while working with the Morris Graves Museum of Art. She continued her graduate studies at the San Francisco Art Institute, SFAI, and is currently enrolled at CIIS for Expressive Arts Therapy. \n\n Some Lady’s current exploration into spiral imagery ties into her work in psychology of exploring complex trauma and healing through symbolism and Jungian archetypes.",
    links: ["https://www.instagram.com"],
  });
  let [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_ALUMBS_URL + "/" + process.env.REACT_APP_ARTIST_UUID
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
      process.env.REACT_APP_ARTISTS_URL + "/" + process.env.REACT_APP_ARTIST_UUID
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
