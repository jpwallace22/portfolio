# Webstacks UI Library

The Webstacks UI Library is a template repository built to quickly jump start new React-based website projects.

<br />

## Get started

To create your new Webstacks project, first create a new repository by using the UI Library as a template. Detailed
instructions can be found
[here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

Once you have created a new repo, run `git clone` on your local system:

```shell
git clone <repo url/ssh key>
```

Then, install all necessary dependencies. This project uses `yarn` as its package manager.

```shell
yarn
```

Now you're ready to start building a website! Guides on how to use the UI Library to create a Gatsby or NextJS site are
available within the Storybook.

## Running Storybook

The Storybook contains a set of useful guide docs, design system definitions, live demos, and documentation for all
components included in the UI Library.

To run Storybook locally, simply run:

```shell
yarn storybook
```

However, Storybook's internal webpack does not yet support node v17. So if you are using that you'll need to run a
separate script:

```shell
yarn node17-storybook
```

## Features

The UI Library offers several features that make it easier to build new websites with. Full guides on them exist in the
Storybook.

1. **Atoms**: These are a code implementation of a design system. Values can be replaced easily and used across the
   project via quarks.
2. **Quarks**: These are essentially fully-featured [styled-components](https://styled-components.com/) that implement
   atom values via React props.
3. **Molecules**: These are small React components mostly built using [Material-UI](https://mui.com/) that give you a
   head-start in building out your new site.
4. **Linting**: Fully fleshed out [ESLint](https://eslint.org/) and [Prettier](https://prettier.io) rulesets are
   included which run on each commit via [Husky](https://typicode.github.io/husky) and
   [lint-staged](https://www.npmjs.com/package/lint-staged).
5. **Documentation**: Every item in the UI Library is displayed on Storybook for easy demonstration for non-coders and
   includes an explanation of functionality.
6. **Type-safety**: The UI Library takes full advantage of Typescript and all types should be defined and used
   correctly.

## Versions

- 1.00 - Completes atoms, quarks, molecules, and documentation
