import React from 'react';
import { shallow } from 'enzyme';
import InputSearch from './index';

describe('Input search', () => {
    it('should be render form component', () => {
        const props = {
            value: 'text',
            title: 'text',
            genre: 'type_genre',
            activeSearchBy: 'type_search',
            activeSortBy: 'type_sort'
        };
        const component = shallow(<InputSearch { ...props }/>);
        expect(component).toMatchSnapshot();
    });
});
