const beforeExample = `import _ from 'lodash';
const result = _.debounce(fn, 300);`;

const afterExample = `import debounce from 'lodash/debounce';
const result = debounce(fn, 300);`;

const analyzerExample = `npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/bundle.js`;

const tsconfigExample = `{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2017",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "declaration": false,
    "removeComments": true
  }
}`;

const webpackExample = `const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};`;

function App() {
  return (
    <div>
      <h1>ShopEase E-Commerce Platform</h1>
      <h2>Bundle Analysis</h2>
      <h3>Analyze Your Bundle</h3>
      <pre>{analyzerExample}</pre>
      <h3>Before</h3>
      <pre>{beforeExample}</pre>
      <h3>After</h3>
      <pre>{afterExample}</pre>
      <h3>TypeScript Config for Better Bundling</h3>
      <pre>{tsconfigExample}</pre>
      <h3>Minifying and Compressing</h3>
      <pre>{webpackExample}</pre>
    </div>
  );
}

export default App;
