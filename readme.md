## @brixtol/eslint-config

This package includes the shareable ESLint configuration consumed by [Brixtol Textiles](https://www.brixtoltextiles.com) for [TypeScript](https://typescriptlang.org) projects.

### Files

The shared configuration applies to the following files:

- `.js`
- `.ts`
- `.cjs`
- `.mjs`

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```bash
pnpm add @brixtol/eslint-config --save-dev
```

> Requires `eslint` as peer dependency.

### Usage

This shared configuration uses the eslint **flatConfig** format as per v9 of eslint and requires a `eslint.config.js` file be included at the root of projects.

```js
import shared from '@brixtol/eslint-config';

export default [
  ...shared,
  {
    ignores: [],
    rules: {}
  }
];
```

### Related

- [@brixtol/prettier-config](https://github.com/brixtol/prettier-config)

### License

[MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
