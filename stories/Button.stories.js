import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('Buttons', () => {
    return (
        <div style={ { backgroundColor: '#252546', padding: '40px' } }>
            <h3 style={ { fontFamily: 'sans-serif', color: 'white' } }>Buttons types and colors:</h3>
            <div style={ { marginTop: '20px' } }>
                <Button
                    onClick={ action('button-click') }
                    name="default"
                />
            </div>
            <div style={ { marginTop: '20px' } }>
                <Button
                    onClick={ action('button-click') }
                    name="inverse" inverse
                />
                <span />
            </div>
            <div style={ { marginTop: '20px' } }>
                <Button
                    type="button"
                    name="default & extraWide"
                    extraWide
                    onClick={ action('button-click') }
                />
            </div>
            <div style={ { marginTop: '20px' } }>
                <Button
                    type="button"
                    name="active"
                    onClick={ action('button-click') }
                    active
                />
            </div>
            <div style={ { marginTop: '20px' } }>
                <Button
                    type="button"
                    name="active & wide"
                    onClick={ action('button-click') }
                    active
                    wide
                />
            </div>
            <div style={ { marginTop: '20px' } }>
                <Button
                    type="button"
                    name="transparent default"
                    onClick={ action('button-click') }
                    transparent
                />
            </div>
            <div style={ { marginTop: '20px' } }>
                <Button
                    type="button"
                    name="transparent active"
                    onClick={ action('button-click') }
                    transparentActive
                />
            </div>

        </div>
    );
  });

