import {withRootAttribute} from 'storybook-addon-root-attribute'

export const globalTypes = {
  theme: {
    name: 'Example Library',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}

export const parameters = {
  options: {
    isFullscreen: false,
    panelPosition: 'right',
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: ''
    }
  },
  layout: 'centered',
  rootAttribute: {
    tooltip: true,
    defaultState: {
      name: 'Default',
      value: null
    },
    states: [
      {
        name: 'Dark',
        value: 'dark'
      }
    ]
  },
  a11y: {
    element: '#root',
    manual: false
  }
}

export const decorators = [withRootAttribute]
