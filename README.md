# Note
This is `Eslint` and `Prettier`, `Tsconfig`, `husky`, `vscode` settings in my TypeScript React.

---

# Getting Started
```bash
# Run it from the root path before the project directory.
sh execute.sh your-react-project-name
```

After the project is created, set your git remote path.

If you run the [`execute.sh`](https://github.com/wonseok-han/my-react-settings/blob/main/execute.sh) shell script, you do not need to configure the following husky except for `package.json`.

---

# 1. prettier

- [.prettierrc 설정 내용 보기](https://github.com/wonseok-han/my-react-settings/blob/main/documents/prettier.md)

# 2. tsconfig

- [tsconfig.json](https://github.com/wonseok-han/my-react-settings/blob/main/tsconfig.json)

# 3. `JavaScript eslint` rules

- [.eslintrc](https://github.com/wonseok-han/my-react-settings/blob/main/.eslintrc.javascript)

# 4. `TypeScript eslint` rules

- [.eslintrc 설정 내용 보기](https://github.com/wonseok-han/my-react-settings/blob/main/documents/eslint.md)

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

- [VSCode Settings 설정](https://github.com/wonseok-han/my-react-settings/blob/main/documents/vscode.settings.md)

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
