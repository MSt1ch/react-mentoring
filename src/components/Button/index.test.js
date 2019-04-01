import React from 'react';
import Button from "./index";
import { shallow } from 'enzyme';

describe('Button component', () => {
    it('should be render with name props', () => {
        const props = {
            name: "title"
        };
		const component = shallow(<Button { ...props }/>);
		expect(component).toMatchSnapshot();
	});

    it('should be render with one or more of props', () => {
        const props = {
            wide: true,
            extraWide: false,
            active: false,
            inverse: false,
            transparent: true,
            transparentActive: true,
        };
        const component = shallow(<Button { ...props }/>);
        expect(component).toMatchSnapshot();
    });
});
