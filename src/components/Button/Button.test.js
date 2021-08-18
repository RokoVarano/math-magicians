import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from './Button';
// for snapshot testing

describe('<Button />', () => {
  const click = () => {};
  const div = document.createElement('div');

  test('renders without crashing', () => {
    ReactDOM.render(<Button content="" click={() => click()} />, div);
  });

  test('should render correctly', () => {
    const { getByTestId } = render(<Button content="1" click={() => click()} />, div);
    expect(getByTestId('button')).toHaveTextContent('1');
  });

  test('should render correctly', () => {
    const { getByTestId } = render(<Button content="3" click={() => click()} />, div);
    expect(getByTestId('button')).toHaveTextContent('3');
  });

  test('should match snapshot', () => {
    const tree = renderer.create(<Button content="hi" click={() => click()} />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
