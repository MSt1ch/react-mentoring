import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';


describe('Header', () => {
    const props = {
        data: [
            {
                budget: 0,
                genres: ["Mystery", "Thriller"],
                id: 412302,
                overview: "and confront.",
                poster_path: "https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
                release_date: "2018-03-30",
                revenue: 0,
                runtime: 92,
                tagline: "",
                title: "Gemini",
                vote_average: 10,
                vote_count: 3,
            }
        ]
    };
    it('should be render нeader component', () => {
        const component = shallow(<Header { ...props } />);
        expect(component).toMatchSnapshot();
    });
});

