import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Sidebar/Header';
import { expect } from 'chai'; 

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <Router> {}
        <Header />
      </Router>
    );
  });

  it('renders search input correctly', () => {
    const { getByPlaceholderText } = render(
      <Router> {}
        <Header />
      </Router>
    );
    const searchInput = getByPlaceholderText('Search...');
    expect(searchInput).to.exist;
  });


});
