import React from 'react';
import { shallow } from 'enzyme';
import FormSearch from './index';

describe('Form search', () => {
    it('should be render form search component', () => {
        const component = shallow(<FormSearch/>);
        expect(component).toMatchSnapshot();
    });
});
