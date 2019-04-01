import React from 'react';
import FilterSection from './index';
import { shallow } from 'enzyme';

describe('Filter section', () => {
    it('should be render filtered section', () => {
        const props = {
            data: ['data']
        };
        const component = shallow(<FilterSection { ...props }/>);
        expect(component).toMatchSnapshot();
    });
});
