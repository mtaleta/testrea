import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const req = require.context('../src/stories', true, /.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module);
