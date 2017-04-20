# NYPL Digital Design Toolkit
Design toolkit (SASS) for the NYPL Digital team

## Installing with npm and using a Node-based asset pipeline

1. Add nypl-toolkit as a dependency:

  ```bash
  npm install --save @nypl/design-toolkit
  ```

1. If you’re using [Eyeglass](http://eyeglass.rocks), skip to Step 3. Otherwise, you’ll need to add nypl-toolkit to your node-sass `includePaths` option. `require("@nypl/design-toolkit").includePaths` is an array of directories that you should pass to node-sass. How you do this depends on how node-sass is integrated into your project.

  ##### Webpack Example

  ```javascript
   // Assign the sassPaths
   const sassPaths = require('@nypl/design-toolkit').includePaths.map((sassPath) =>
    `includePaths[]=${sassPath}`
  ).join('&');

  // Using the ExtractText Plugin
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.resolve(rootPath, 'src'),
        loader: ExtractTextPlugin.extract(`css?sourceMap!sass?sourceMap&${sassPaths}`)
      }
    ]
  }

  // Using the SASS loader
  module: {
    loaders: [
      {
        test: /\.scss?$/,
        loader: `style!css!sass?${sassPaths}`,
        include: path.resolve(rootPath, 'src')
      }
    ]
  }
  ```

1. Import the NYPL Toolkit SASS library into your Sass files:

  ```scss
  @import "toolkit";
  ```

2. If you also need the header or footer styles, add those:

  ```scss
  @import "header";
  @import "footer";
  ```

3. You can also load the normalization file to remove any browser or other colliding styles (must be the first import):

  ```scss
  @import "nypl-normalize";
  ```
