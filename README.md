# Note
This is `Eslint` and `Prettier`, `Tsconfig`, `husky`, `vscode` settings in my TypeScript React.

---

# Getting Started
```bash
# Packages Install
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react husky lint-staged prettier
npm set-script prepare "husky install"
yarn prepare
or
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react husky lint-staged prettier
npm set-script prepare "husky install"
npm run prepare
```

Copy `.eslintrc`, `.eslintignore`, `prettierrc.js`, `.prettierignore`, `tsconfig.json`, `.vscode`

---

# 1. prettier
- [.prettierrc.js](https://github.com/wonseok-han/my-react-settings/blob/main/.prettierrc.js)

# 2. tsconfig
- [tsconfig.json](https://github.com/wonseok-han/my-react-settings/blob/main/tsconfig.json)

# 3. `JavaScript eslint` rules
- [.eslintrc](https://github.com/wonseok-han/my-react-settings/blob/main/.eslintrc.javascript)

# 4. `TypeScript eslint` rules
- [.eslintrc](https://github.com/wonseok-han/my-react-settings/blob/main/.eslintrc)

# 5. husky
- [husky](https://github.com/wonseok-han/my-react-settings/blob/main/.husky/pre-commit)
```bash
# husky pre-commint init setting
npx husky add .husky/pre-commit "yarn lint-staged"
```
```js
// package.json
{
  "scripts": {
    "prepare": "husky install",
  },
  "lint-staged": {
    "./src/**/*.{js,jsx,ts,tsx}": [
      "eslint ./src --fix",
      "prettier -w ./src/**/*.(js|jsx|ts|tsx)"
    ]
  },
}
```

# 6. VSCode Settings
- [VSCode Settings](https://github.com/wonseok-han/my-react-settings/blob/main/.vscode/settings.json)

---

# Reference
- [prettier](https://prettier.io/docs/en/options.html)
- [tsconfig](https://www.typescriptlang.org/tsconfig)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [husky](https://github.com/typicode/husky)
