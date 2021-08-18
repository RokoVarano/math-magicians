import React from 'react'
import Header from './Header';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'

describe('Test Header', () => {
    test('render header', () => {
        const {queryByTestId} = render(<Header />, {wrapper: Router});
        expect(queryByTestId('header')).toBeTruthy();
    })
})