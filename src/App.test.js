import { render, screen } from '@testing-library/react';
import Home from './pages/home/Home.jsx';

test('renders home page', () => {
  const { getByText } = render(<Home 
    artist={{
      uuid: "",
      albums: [],
      email: "testemail@testdomain.com",
      image: "",
      name: "Test Artist",
      links: [],
    }} 
    albums={[]} 
    settings={{
      theme: "gallery"
    }}
  />);
});
