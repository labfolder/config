# @labforward/config

## Packages

- [@labforward/config](./packages/config/README.md)
- [@labforward/eslint-config-base](./packages/eslint-config-base/README.md)
- [@labforward/eslint-config-cypress](./packages/eslint-config-cypress/README.md)
- [@labforward/eslint-config-node](./packages/eslint-config-node/README.md)
- [@labforward/eslint-config-react](./packages/eslint-config-react/README.md)

## Publishing Packages Locally

Test any changes made to the packages by publishing them to a local NPM registry.

### Prerequisites

Install Verdaccio using `npm`

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

### Publishing

Make sure that Verdaccio is running in the background. Otherwise run `verdaccio`

:warning: Always double check that your `~/.npmrc` file is configured to publish to the local registry.

To publish all packages run `yarn yolo`

Confirm that the packages were published by visiting: `http://localhost:4873`

To unpublish packages run `yarn workspaces foreach exec npm unpublish --force`
