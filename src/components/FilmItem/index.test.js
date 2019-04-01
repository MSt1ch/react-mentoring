import React from 'react';
import { shallow } from 'enzyme';
import FilmItem from './index';

describe('Film item', () => {
   it('should be render film item card', () => {
       const props = {
           title: 'title',
           poster_path: 'http://test.ru',
           release_date: '2018-03-30',
           genres: ['example']
       };
       const component = shallow(<FilmItem { ...props } />);
       expect(component).toMatchSnapshot();
   });
});
