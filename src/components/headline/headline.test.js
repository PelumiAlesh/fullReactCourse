import React from 'react';
import  { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from '../../../Utils';

const setUp = (props={}) => {
  const component = shallow(<Headline  {...props} />)
  return component;
}

describe('Headline Component', () => {

  describe('Checking Proptypes', () => {
    it('Props should not throw any error', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          lName: 'Test',
          fName: 'TeST',
          age: 23,
          onlineStatus: true
        }]
      }
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined();
    })
  })

  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props)
    })

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const h1 =  findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    }); 
    
    it('Should render a Description', () => {
      const desc =  findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });

  });

  describe('Have no props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setUp()
    });

    it('Should not render', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });

  });
  })