import React from 'react';
import { shallow } from 'enzyme';
import FilmDescription from './index';

describe('Film description', () => {
    it('should be render film description component', () => {
        const props = {
            title: 'title',
            poster_path: 'http://test.ru',
            release_date: '2018-03-30',
            runtime: 200,
            overview: 'simple text',
            tagline: 'simple tag',
            vote_average: 6,
        };
        const component = shallow(<FilmDescription { ...props } />);
        expect(component).toMatchSnapshot();
    });
});
