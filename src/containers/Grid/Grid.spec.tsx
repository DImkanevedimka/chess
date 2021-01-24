import { mount, shallow, render } from 'enzyme';
import React from 'react';
import {Grid} from './Grid'

describe('check Grid snapshot', () => {
    it('should be ok snapshot', () => {
        const component = render(<Grid />)
        expect(component).toMatchSnapshot()
    })
});
