import { configure, addDecorator,addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

import { withNotes } from '@storybook/addon-notes';
import { withInfo } from "@storybook/addon-info";
import { withOptions } from '@storybook/addon-options';
import requireContext from 'require-context.macro';
//import { withI18next } from 'storybook-addon-i18next';
//import StoryRouter from 'storybook-react-router';

//import i18n from '../src/i18n';

import 'antd/dist/antd.css';
//import '../src/index.css';

addDecorator(withNotes);
//addDecorator(StoryRouter());

addDecorator(
  withInfo({
    inline: true,
    source: true,
    propTables: false,
  })
);

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Сценарии использования',
      brandUrl: '#',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    enableShortcuts: true,
  },
});

//addDecorator(withI18next({
//  i18n,
//  languages: {
//    en: 'English',
//    ru: 'Русский',
//  }
//}));


const req = requireContext('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
