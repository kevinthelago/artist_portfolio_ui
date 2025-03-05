import { render } from '@testing-library/react';
import Albums from './Albums';

test('renders home page hero', () => {
    // artist, albums, settings
  const { getByTestId } = render(<Albums 
    artist={{
      uuid: "",
      albums: [],
      email: "testemail@testdomain.com",
      image: "",
      name: "Test Artist",
      links: [],
    }} 
    albums={[

    ]} 
    settings={{
      theme: "gallery"
    }}
  />);

  const albums = getByTestId("albums");
  expect(albums).toBeInTheDocument();
});
