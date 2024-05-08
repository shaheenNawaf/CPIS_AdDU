import { render } from '@testing-library/react';
import Login from '../Login/Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders username input correctly', () => {
    const { getByLabelText } = render(<Login />);
    const usernameInput = getByLabelText('Username');
    expect(usernameInput).toBeTruthy();
  });


});
