import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    fetching: false,
  };

  const wrapper = mount(<Loading {...props} />)

  return { props, wrapper };
}

describe('Loading', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('div').hasClass('loading')).toBe(true);
  }); 
});