import React from 'react';
import { shallow } from 'enzyme';
import InputSearch from './index';

describe('Input search', () => {
    it('should be render input search component', () => {
        const component = shallow(<InputSearch/>);
        expect(component).toMatchSnapshot();
    });
});
