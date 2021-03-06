import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps} from '../../../Utils' ;
import SharedButton from './index';

describe('SharedButton Componen', () => {
  
  describe('Checking props', () => {
    
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button text',
        emitEvent: () => {
  
        }
      };
      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined()
    })
  })

  describe('Renders', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {}
      }
      wrapper = shallow(<SharedButton {...props} />)
    });

    it('should display a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1)
    });
  })
  
})
