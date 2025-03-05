import { render } from '@testing-library/react';
import Album from './Album';

test('renders home page hero', () => {
    // artist, album, settings
  const { getByTestId } = render(<Album 
    artist={{
      uuid: "",
      albums: [],
      email: "testemail@testdomain.com",
      image: "",
      name: "Test Artist",
      links: [],
    }} 
    album={{
        pieces: []
    }} 
    settings={{
      theme: "gallery"
    }}
  />);
  
  const album = getByTestId("album");
  expect(album).toBeInTheDocument();
});
