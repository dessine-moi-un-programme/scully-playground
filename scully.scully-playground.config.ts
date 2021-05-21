import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-playground",
  outDir: './dist/static',
  routes: {
    '/:id': {
      type: 'json',
      id: {
          url: 'http://localhost:3000/articles',
          property: 'id'
      }
  }
  }
};