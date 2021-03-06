import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../Utils'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />)
  return component;
}

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'HeaderComponent')
    expect(wrapper.length).toBe(1)
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'LogoImg');
    expect(logo.length).toBe(1)
  });

});