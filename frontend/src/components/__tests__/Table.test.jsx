import { render } from '@testing-library/react';
import Table from '../Products/TableProduct/Table'; 

describe('Table Component', () => {
  it('renders without crashing', () => {
    render(<Table />);
  });

  it('renders table headers correctly', () => {
    const { getByText } = render(<Table />);
    expect(getByText('Product ID')).toBeTruthy();
    expect(getByText('Product Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
    expect(getByText('Stock')).toBeTruthy();
    expect(getByText('Notes')).toBeTruthy();
  });


});