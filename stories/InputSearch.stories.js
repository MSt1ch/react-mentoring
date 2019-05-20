import React from 'react';
import { storiesOf } from '@storybook/react';

import InputSearch from '../src/components/InputSearch';

storiesOf('InputSearch', module)
  .add('InputSearch', () => {
    return (
        <div style={ { width: '200px', fontFamily: 'sans-serif' } }>
        <InputSearch/>
        </div>
    );
  });

