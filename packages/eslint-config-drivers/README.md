# @labforward/eslint-config-drivers

Provide configuration files for Laboperator driver-related repositories.

Usage `yarn add -D @labforward/eslint-config-drivers`

## For JavaScript Projects

Needed dependencies: `yarn add -D eslint`

Create a `.eslintrc.js` file with the following contents to extend this config:

```javascript
module.exports = {
  extends: '@labforward/eslint-config-drivers',
};
```

Create a `.prettierrc.js` file with the following contents to extend this config:

```javascript
module.exports = require('@labforward/config/prettier');
```

On your `package.json` add the following property:

```json
"importSort": {
  ".js, .jsx, .ts, .tsx": {
    "style": "@labforward/config/import-sort"
  }
}
```

## For TypeScript Projects

Needed dependencies: `yarn add -D eslint typescript`

Create a `tsconfig.json` file with the following contents to extend this config:

```json
{
  "extends": "@labforward/eslint-config-drivers",
  "compilerOptions": {
    "outDir": "dist",
    "rootDirs": ["src", "spec"]
  },
  "include": ["src/**/*", "spec/**/*"]
}
```

You should update the paths according to your project needs.

If you do not want your tests to build, you should also create a `tsconfig.build.json` file with the following contents:

```json
{
  "extends": "./tsconfig.json",
  "exclude": ["spec/**/*"]
}
```

Create a `.eslintrc.js` file with the following contents to extend this config:

```javascript
module.exports = {
  extends: '@labforward/eslint-config-drivers',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
```

Create a `.prettierrc.js` file with the following contents to extend this config:

```javascript
module.exports = require('@labforward/config/prettier');
```

On your `package.json` add the following property:

```json
"importSort": {
  ".js, .jsx, .ts, .tsx": {
    "style": "@labforward/config/import-sort"
  }
}
```
