import { render } from '@testing-library/react';
import NotFound from './NotFound';

test('renders home page hero', () => {
  const { getByTestId } = render(<NotFound />);

  const notFound = getByTestId("not-found");
  expect(notFound).toBeInTheDocument();
});
