# @labforward/config

## Packages

- [@labforward/config](./packages/config/README.md)
- [@labforward/eslint-config-base](./packages/eslint-config-base/README.md)
- [@labforward/eslint-config-cypress](./packages/eslint-config-cypress/README.md)
- [@labforward/eslint-config-drivers](./packages/eslint-config-drivers/README.md)
- [@labforward/eslint-config-node](./packages/eslint-config-node/README.md)
- [@labforward/eslint-config-react](./packages/eslint-config-react/README.md)

## Contributing

### Prerequisites

The repo makes use of yarn 3 workspaces with additional plugins to manage [Release Workflow](https://yarnpkg.com/features/release-workflow).

If you haven't yet, run `corepack enable` once which would enable [automatic switching](https://nodejs.org/api/corepack.html) between different version of package manager as requested by the `packageManager` key inside `package.json`

### Making changes and opening a PR

Once you've made your changes, you'll need to run `yarn bump`. You'll be presented with an interactive screen to plan the type of release (patch,minor,major,declined,undecided) to make to each affected packages.

Once you've made your choice, a `.yml` file inside `.yarn/versions` will either be created or updated. Please commit this file as part of your PR.

### Testing changes

Test any changes made to the packages by publishing them to a local NPM registry (Verdaccio).

#### Prerequisite

You can install Verdaccio using `npm`

```bash
npm install --global verdaccio
```

Run `verdaccio` in a second terminal. Visit `http://localhost:4873` to confirm the registry is working.

Backup your `~/.npmrc` file, since the following steps will modify it.

Configure NPM to use the local registry for all `@labforward` packages.

```bash
npm set "@labforward:registry" "http://localhost:4873"
npm adduser --registry http://localhost:4873 # Use your GitHub username and email.
```

#### Publishing to Verdaccio

Make sure that Verdaccio is running in the background. Otherwise run `verdaccio`

:warning: Always double check that your `~/.npmrc` file is configured to publish to the local registry.

To publish all packages run `yarn yolo`

Confirm that the packages were published by visiting: `http://localhost:4873`

To unpublish packages run `yarn workspaces foreach exec npm unpublish --force`
