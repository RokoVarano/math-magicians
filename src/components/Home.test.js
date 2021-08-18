import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

it("test quote text rendering", () => {
    const {queryByText} = render(<Home />);

    expect(queryByText('Welcome to our site!')).toBeTruthy();
})