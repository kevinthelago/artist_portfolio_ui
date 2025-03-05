import { render } from '@testing-library/react';
import Loading from './Loading';

test('renders home page hero', () => {
  const { getByTestId } = render(<Loading />);

  const loading = getByTestId("loading");
  expect(loading).toBeInTheDocument();
});
