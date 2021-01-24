import { shallow } from 'enzyme';
import React from 'react';
import { Cell } from './Cell';
import { Figures } from '../../containers/Grid/figures';

const setUp = (props: any = {}) => {
    return shallow(<Cell {...props} />)
}

describe('check Cell component', () => {
    it('should componet include .cell', () => {
        const component = setUp();
        const wrapper = component.find('.Cell')
        expect(wrapper.length).toBe(1)
    })
    
    it('should componet include .even', () => {
        const component = setUp();
        const wrapper = component.find('.Even')
        expect(wrapper.length).toBe(1)
    })
    
    it('should componet include .odd', () => {
        const component = setUp({index: 2});
        const wrapper = component.find('.Odd')
        expect(wrapper.length).toBe(1)
    })

    it('should componet include .possible', () => {
        const component = setUp({possible: true});
        const wrapper = component.find('.possible')
        expect(wrapper.length).toBe(1)
    })

    it('should componet include figure', () => {
        const component = setUp({index: 2, figure:{color: 'white', type: Figures.rook}});
        const wrapper = component.find('Figure')
        expect(wrapper.length).toBe(1)
    })
})
