import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

it("test quote text rendering", () => {
    const {queryByText} = render(<Quote />);

    expect(queryByText('Number is the ruler of forms and ideas, and the cause of gods and demons. --Pythagoras')).toBeTruthy();
})