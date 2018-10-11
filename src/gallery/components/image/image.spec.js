import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    displayImage: jest.fn(),
  };

  const wrapper = mount(<Image {...props} />)

  return { props, wrapper };
}

describe('Image', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(false).toBe(true);
  }); 
  it('should call the displayImage() action on click', () => {
    expect(false).toBe(true);
  });
});
