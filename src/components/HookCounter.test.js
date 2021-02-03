import HookCounter from './HookCounter';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = () => shallow(<HookCounter />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

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