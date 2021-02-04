import HookCounter from './HookCounter';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils'

/**
 * Factory function to create a ShallowWrapper for the HookCounter component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<HookCounter />);

test('renders without error', () => {
  const wrapper = setup();
  const hookCounterComponent = findByTestAttr(wrapper, 'hook-counter-component');
  expect(hookCounterComponent.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

describe('Increment', () => {

  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('counter increments when button is clicked', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('Decrement', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('counter decrements when button is clicked', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('-1');
  });
});

describe('Reset', () => {
  test('renders reset button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'reset-button');
    expect(button.length).toBe(1);
  });

  test('counter resets to 0  when button is clicked', () => {
    const wrapper = setup();
    const incButton = findByTestAttr(wrapper, 'increment-button');
    incButton.simulate('click');
    const resetButton = findByTestAttr(wrapper, 'reset-button');
    resetButton.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});