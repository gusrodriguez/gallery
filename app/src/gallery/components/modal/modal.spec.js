import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    image: null,
    close: jest.fn(),
  };

  const wrapper = mount(<Modal {...props} />)

  return { props, wrapper };
}

describe('Modal', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('div').first().hasClass('modal')).toBe(true);
  }); 
  it('should call the close() action on click', () => {
    const div = wrapper.find('span');
    div.simulate('click');
    expect(props.close).toHaveBeenCalledTimes(1);
  });
});