import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {

  const wrapper = mount(<ErrorMessage />)

  return { wrapper };
}

describe('Error Message', () => {
  const { wrapper } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('div').hasClass('error-message')).toBe(true);
  }); 
});