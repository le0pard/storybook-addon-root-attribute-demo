import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.css';

storiesOf('Button', module)
  .add('with text', () => (
    <div>
      <h1>
        This example show, how storybook-addon-root-attribute apply different css class on html element. This changes apply different custom css variables inside components
      </h1>
      <button className="button" onClick={action('clicked')}>
        Hello Button
      </button>
      <a href="https://github.com/le0pard/storybook-addon-root-attribute">
        Go to addon
      </a>
    </div>
  ))
  .add('with some emoji', () => (
    <div>
      <h1>
        This example show, how storybook-addon-root-attribute apply different css class on html element. This changes apply different custom css variables inside components
      </h1>
      <button className="button" onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </button>
      <a href="https://github.com/le0pard/storybook-addon-root-attribute">
        Go to addon
      </a>
    </div>
  ));
