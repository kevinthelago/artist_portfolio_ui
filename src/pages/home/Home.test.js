import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page hero', () => {
  const { getByTestId } = render(<Home 
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
  const hero = getByTestId("home-hero-video");
  expect(hero).toBeInTheDocument();
});
