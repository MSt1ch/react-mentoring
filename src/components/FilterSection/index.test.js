import React from 'react';
import FilterSection from './index';
import { shallow } from 'enzyme';

describe('Filter section', () => {
    it('should be render filtered section', () => {
        const props = {
            total: 1,
            rating: '6.2',
            releaseDate: '2019',
            activeSortBy: 'name',
        };
        const component = shallow(<FilterSection { ...props }/>);
        expect(component).toMatchSnapshot();
    });
});
