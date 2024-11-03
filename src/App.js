import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Album from "./pages/album/Album";
import Albums from "./pages/albums/Albums";
import Nav from "./pages/Nav";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/not_found/NotFound";
import "./app.css";
import Loading from "./pages/loading/Loading";

function App() {
    let [settings, setSettings] = useState({
        theme: "gallery"
    })
    let [artist, setArtist] = useState({});
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                process.env.REACT_APP_ALUMBS_URL + process.env.REACT_APP_ARTIST_UUID
            )
                .then((response) => response.json())
                .then((data) => {
                    setAlbums(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                process.env.REACT_APP_ARTISTS_URL + process.env.REACT_APP_ARTIST_UUID
            )
                .then((response) => response.json())
                .then((data) => {
                    setArtist(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchData();
    }, []);

    return (
        <ParallaxProvider>
            <BrowserRouter>
                <Routes>
                    {Object.keys(artist).length === 0 ? <Route path="/" element={<Loading />} /> :
                        <Route path="/" element={<Nav artist={artist} settings={settings} />}>
                            <Route index element={<Home artist={artist} albums={albums} settings={settings} />} />
                            <Route path="/albums" element={<Albums artist={artist} albums={albums} settings={settings} />} />
                            <Route path="/about" element={<About artist={artist} settings={settings} />} />
                            <Route path="/admin" element={<Admin artist={artist} albums={albums} settings={settings} />} />
                            {albums.map((album) => (
                                <Route
                                    key={album.name + " route"}
                                    path={"/albums/" + album.url}
                                    element={<Album artist={artist} album={album} settings={settings} />}
                                />
                            ))}
                            <Route path="*" element={<NotFound artist={artist} />} />
                        </Route>
                    }
                </Routes>
            </BrowserRouter>
        </ParallaxProvider>
    );
}

export default App;
