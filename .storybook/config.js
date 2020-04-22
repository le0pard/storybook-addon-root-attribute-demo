import {
  configure,
  addDecorator,
  addParameters
} from '@storybook/react';
import { withRootAttribute } from 'storybook-addon-root-attribute';

// global
addDecorator(withRootAttribute);
addParameters({
  rootAttribute: {
    tooltip: true,
    defaultState: {
      name: "Light",
      value: null
    },
    states: [
      {
        name: "Dark",
        value: "dark"
      },
       {
        name: "Blue",
        value: "blue"
      }
    ]
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
