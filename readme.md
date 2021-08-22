## @brixtol/eslint-config

This package includes the shareable ESLint configuration consumed by [Brixtol Textiles](https://www.brixtoltextiles.com) for [TypeScript](https://typescriptlang.org) projects.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/eslint-config --save-dev
```

### Usage

Extend the configuration within `package.json`

```json
{
  "eslintConfig": {
    "ignorePatterns": "*.html",
    "extends": ["@brixtol/eslint-config"]
  }
}
```

### Monorepo/Workspace

This module is installed at project root in the Brixtol mono/multi repository and thus is available for consumption by all containing packages. Closed sourced packages consume the module from root whereas any open sourced packages existing in the monorepo workspace will provide the config as a development dependency. This approach allows individuals outside of our organization keeping to our code style aesthetics when contributing to projects made available to the public.

> Please note that the Brixtol Textiles workspace is mostly closed source and only selected packages have been made available on public npm registry.

### Related

- [@brixtol/eslint-config-javascript](https://github.com/brixtol/eslint-config-javascript)
- [@brixtol/prettier-config](https://github.com/brixtol/prettier-config)

### License

[MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
