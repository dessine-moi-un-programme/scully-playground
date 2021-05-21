import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [ DisableAngular ];

setPluginConfig(DisableAngular, 'render', {
  removeState: true,
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-playground",
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    '/:id': {
      type: 'json',
      id: {
          url: 'http://localhost:3000/articles',
          property: 'id'
      },
      postRenderers: postRenderers
    }
  }
};