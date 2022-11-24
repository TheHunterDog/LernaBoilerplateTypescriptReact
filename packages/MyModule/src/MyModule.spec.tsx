/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { MyModule } from './MyModule';

test('renders MyModule', () => {
  const { getByText } = render(<MyModule />);
  const linkElement = getByText(/Lerna/i);
  expect(linkElement).toBeDefined();
});
