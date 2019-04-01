import React from 'react';
import Footer from './index';
import { shallow } from 'enzyme';

describe('Footer component', () => {
    it('shold be render render footer with logo', () => {
        const title = "logo";
        const component = shallow(
            <Footer>
                <h4>{ title }</h4>
            </Footer>
    );
        expect(component).toMatchSnapshot();
    });
});
