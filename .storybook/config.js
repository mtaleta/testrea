import { configure, addDecorator } from '@storybook/react';
import React from 'react';
configure(
  () => {
    const req = require.context('../src/stories', true, /.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);
configure(loadStories, module);
