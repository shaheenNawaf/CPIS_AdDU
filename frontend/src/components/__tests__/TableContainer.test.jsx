import { render } from '@testing-library/react';
import TableContainer from '../Products/TableProduct/TableContainer';

describe('TableContainer Component', () => {
  it('renders without crashing', () => {
    render(<TableContainer />);
  });

  it('renders table buttons correctly', () => {
    const { getByText } = render(<TableContainer />);
    expect(getByText('Create Product')).toBeTruthy();
    expect(getByText('Edit Product')).toBeTruthy();
    expect(getByText('Remove Product')).toBeTruthy();
  });

});