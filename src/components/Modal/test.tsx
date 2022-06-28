import React from 'react';
import { render, screen } from '@testing-library/react';

import Modal from '.';

describe('<Modal />', () => {
  it('should render the heading', () => {
    const { container } = render(<Modal title="Test" subtitle="Test" />);

    expect(screen.getByRole('heading', { name: /Modal/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
