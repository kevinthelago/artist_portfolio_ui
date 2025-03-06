import { render } from '@testing-library/react';
import About from './About';

test('renders about page', () => {
  const { getByTestId } = render(<About 
    artist={{
      uuid: "",
      email: "testemail@testdomain.com",
      about: "",
      image: "",
      name: "Test Artist",
      links: [],
    }} 
    settings={{
      theme: "gallery"
    }}
  />);
  
  const about = getByTestId("about");
  expect(about).toBeInTheDocument();
});
