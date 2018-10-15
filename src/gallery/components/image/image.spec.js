import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    displayImage: jest.fn(),
    resizeImages: jest.fn(),
    containerWidth: 10,
    size: 10,
    image: {
      src: '', 
      title: 'hello',
      author: 'john doe',
      postUrl: '',
    },
    visible: true,
  };

  const wrapper = mount(<Image {...props} />);

  return { props, wrapper };
}

describe('Image', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('div').first().hasClass('image')).toBe(true);
  }); 
  it('should call the displayImage() action on click', () => {
    const div = wrapper.find('div').first();
    div.simulate('click');
    expect(props.displayImage).toHaveBeenCalledTimes(1);
  });
});