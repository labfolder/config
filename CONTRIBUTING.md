# Contributing

## Developing

1. Run `npm install -g yarn` to update the global yarn version to the latest v1.
2. Run `yarn install` to install dependencies.

## Pull Requests

Each pull request should contain a release strategy that indicates how your changes impact the package's versions. No changes will be made to the package's versions in this process.

Run `yarn bump` at the repo's root and follow the instructions on the screen. A release strategy file will be created at `.yarn/versions/`. Please commit this file to your pull request.

Make sure that the workspace's version matches the highest package version.

All version changes should use [Semantic Versioning](https://semver.org/).

## Releases

Make sure to pull the latest changes from `main` and `develop`.

Run `yarn bump:apply` at the repo's root to apply the current release strategy.

Then follow the standard release process for Labforward.
