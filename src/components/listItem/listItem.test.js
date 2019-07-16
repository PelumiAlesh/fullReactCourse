import React, { Component } from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {
  
  describe('Checking Props', () => {

    it('Should NOT throw any warning', () => {
      const expectedProps = {
        title: 'Example title',
        desc: 'Some text that is fake'
      }
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined
    });
  });

  describe('Should render', () => {
    
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example title',
        desc: 'Some text that is fake'
      }
      wrapper = shallow(<ListItem {...props} />)
    });

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text that is fake'
      }
      wrapper = shallow(<ListItem {...props} />)
    });

    it('Should not render', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component).toBeUndefined;
    });
  });
  
})
