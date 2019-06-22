import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import './styles.css';

storiesOf('Button', module)
  .add('with text', () => <button className="button" onClick={action('clicked')}>Hello Button</button>)
  .add('with some emoji', () => (
    <button className="button" onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));
